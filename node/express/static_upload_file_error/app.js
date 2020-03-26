const express = require('express');
const fs = require('fs');

let server = express();

server.engine('.html', require('express-art-template'));

server.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

server.set('view engine', '.html');

let router = express.Router();

router.get('/', (req, res, next) => {
    console.log('请求进来了？', req.url);
    
    // 假如获取文件
    let errorPath = './abc/a.txt';
    try {
        fs.readFileSync(errorPath);
        res.render('index');
    } catch (err) {
        // throw err;   // 用户看到该异常体验太差
        next(err);      // 会触发一个具备4个参数的中间件函数
    }
})
    .get('/index', (req, res, next) => {
        res.send('index');
    })
    // 最后一条路由中
    .all('*', (req, res) => {
        res.send('地址错误，您去首页吧！');
    });

// 把public下的文件暴露出来
// 当虚拟目录/public被匹配以后，未来url都会去除掉/public
server.use('/public', express.static('./public'));

server.use(router);

// 处理错误（参数位置错误优先） -> 优雅的用户体验
server.use((err, req, res, next) => {
    res.send('<h1>亲爱的用户，您访问的页面，有事儿了，<a href="/">去首页看看？</a></h1>');
});

server.listen(8888);