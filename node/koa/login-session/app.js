const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-art-template');
const path = require('path');
const static = require('koa-static');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');


let app = new Koa();
let router = new Router();

render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.html',
    debug: process.env.NODE_ENV != 'production'
});

router.get('/', async ctx => {
        ctx.render('index');
    })
    .post('/login', async ctx => {
        // 用户名abc   密码123
        let userName = ctx.request.body.userName;
        let password = ctx.request.body.password;
        // console.log(password);
        
        // 回写cookie，保存用户数据到session中
        if (userName == 'abc' || password == '123') {
            ctx.throw(200, '小猿生病了');
        } else {
            // 使用session保存数据
            ctx.session.user = {
                userName
            };
            ctx.body = '登录成功';
        }
    }).get('/list', ctx => {
        ctx.body = `当前登录用户为：${ctx.session.user.userName}`    
});

app.use(async (ctx, next) => {
    if (ctx.url.startsWith('/public')) {
        ctx.url = ctx.url.replace('/public', '');
    }
    await next();
});
app.use(static(path.resolve('./public')));

app.keys = ['wangxing'];
// const CONFIG = {
//     key: 'koa:sess', // session名称
//     maxAge: 86400000,   // 过期时间
//     overwrite: true, /** (boolean) can overwrite or not (default true) */
//     httpOnly: true, /**不允许在客户端操作cookie */
//     signed: true, /**数字签名，保证数据不被篡改 */
//     rolling: false, /** 过期访问时间顺延 */
//     renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
// };

let store = {
    storage: {},
    get(key) {
        return this.storage[key]
    },
    set(key, session) {
        this.storage[key] = session
    },
    destroy(key) {
        delete this.storage[key]
    }
};
app.use(session({store}, app));

// koa中优雅的处理错误页面
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (ee) {
        console.log('====================', ee);
        ctx.status = 200;
        ctx.body = `<div>出错了！</div>`        
    }
})
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// 错误处理
app.on('error', async (err, ctx) => {
    console.log(err);

});

app.listen(8888);