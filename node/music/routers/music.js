// 引入路由中间件 开始
const Router = require('koa-router');
const musicController = require('../controllers/music');
let musicRouter = new Router();

musicRouter
    // 添加的请求行为在restful中，更好的请求规则
    // 要求添加=> post
    .post('/music/add-music', musicController.addMusic)
    .put('/music/update-music', musicController.updateMusic)
    .get('/music/del-music', musicController.deleteMusic)
    .get('/music/index', musicController.showIndex)
    .get('/music/add', async ctx => {
        ctx.render('add');
    }).get('/music/edit-music', musicController.showEdit);

module.exports = musicRouter;
// 引入路由中间件 结束