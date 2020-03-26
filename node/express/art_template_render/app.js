const express = require('express');

let server = express();

// 注册一个模板引擎
server.engine('.html', require('express-art-template'));

// 区分开发和生产环节的不同配置
server.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    imports: {
        // 数据的导入，和过滤显示的操作
        num: 1,
        reverse: function (str) {
            return `^_^${str}^_^`;
        }
    }
});

// 配置默认渲染引擎
server.set('view engine', '.html');

let router = express.Router();

router.get('/hero-list', (req, res) => {
    res.render('list.html', {
        heros: [{ name: '貂蝉' }, { name: '西施' }, { name: '王昭君' }, { name: '杨玉环' }]
    });
})

server.use(router);

server.listen(8888);