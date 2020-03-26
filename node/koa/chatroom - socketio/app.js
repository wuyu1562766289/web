// koa 解析请求体数据  登录，koa-session
// koa-static koa-router art-template

const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const render = require('koa-art-template');
const path = require('path');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const IO = require('koa-socket');

let msgs = [
    { username: '小明', content: 'haha' },
    { username: '小红', content: 'hehe' },
    { username: '小蝶',content: 'xixi' }
];

// 全局变量：global
global.mySessionStore = {};

function findBySocketId(socketid) {
    for (var tempstamp in global.mySessionStore) {
        let obj = global.mySessionStore[tempstamp];
        if (obj.socketid == socketid) {
            return obj;
        }
    }
}

let app = new Koa();

// 加入socket.io 开始
const io = new IO();
io.attach(app);     // 附加到app上产生关联
io.on('join', content => {
    console.log('链接上了');
    io.broadcast('msg1', '我是服务器来的');
});

// 接收用户的消息
io.on('sendMsg', (context, data) => {
    // context.socket(客户端的那个链接)
    // context.socket.socketId 私聊用的
    // console.log('消息来了', data.newContent);
    // 在这里得想办法拿到当前用户
    let obj = findBySocketId(context.socket.socket.id);

    // 广播给所有人
    io.broadcast('allmessage', obj.username + '对所有人说：' + data.newContent);
});
// 处理登录同步信息
io.on('login', context => {
    let id = context.data.id;
    console.log(id);
    
    global.mySessionStore[id].socketid = context.socket.socket.id;
})

// 加入socket.io 结束

render(app, {
    // 页面查找的目录
    root: path.join(__dirname, 'views'),
    // 设置后缀名
    extname: '.html',
    // debug:false则每次压缩页面及js，包括混淆，静态数据不会实时更新（不每次都读文件）
    debug: process.env.NODE_ENV !== 'production'
});

let router = new Router();
router.get('/', ctx => {
    ctx.render('index');
}).post('/login', ctx => {
    let { username, password } = ctx.request.body;
    // 不验证直接挂在session
    ctx.session.user = {
        username
    }

    // 1.生成时间戳将时间戳响应给客户端（类似cookie）
    let id = Date.now();
    ctx.session.user.id = id;

    // 2.保存到自己的sessionStore中
    global.mySessionStore[id] = {
        username: username
    }

    // 重定向到聊天室
    ctx.redirect('/list');
}).get('/list', async ctx => {
    ctx.render('list', {
        username: ctx.session.user.username,
        msgs,
        id:ctx.session.user.id
    });
}).post('/add', async ctx => {
    let username = ctx.session.user.username;
    let content = ctx.request.body.content;
    console.log(content);
    
    // 加入到数组中
    msgs.push({
        username, content
    });
    ctx.body = msgs;
});

// 在服务器内存中存储{session_id:用户数据}
let store = {
    myStore: {},
    get: function (key) {
        return this.myStore[key];
    },
    set: function (key, session) {
        this.myStore[key] = session;
    },
    destroy: function (key) {
        delete this.myStore[key];
    }
};

// 签名依据
app.keys=['wangxing'];

// 处理静态资源
app.use(static(path.resolve('./public')));
// 处理session
app.use(session({ store }, app));
// 处理请求体数据
app.use(bodyParser());
// 路由
app.use(router.routes());
// 处理404 501
app.use(router.allowedMethods());

app.listen(8888);
