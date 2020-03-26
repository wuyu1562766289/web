// koa 解析请求体数据  登录，koa-session
// koa-static koa-router art-template

const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const render = require('koa-art-template');
const path = require('path');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');

let msgs = [
    { username: '小明', content: 'haha' },
    { username: '小红', content: 'hehe' },
    { username: '小蝶',content: 'xixi' }
];

let app = new Koa();
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

    // 重定向到聊天室
    ctx.redirect('/list');
}).get('/list', async ctx => {
    ctx.render('list', {
        username: ctx.session.user.username,
        msgs
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
