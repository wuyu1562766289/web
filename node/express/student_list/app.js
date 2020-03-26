const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

let heros = [];
let server = express();

server.engine('.html', require('express-art-template'));

server.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

server.set('view engine', '.html');

let router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', {
        heros
    });
})
    .post('/add', (req, res, next) => {
        // 解析文件，用包
        var form = new formidable.IncomingForm();

        // 修改上传目录
        form.uploadDir = path.join(__dirname, 'public', 'imgs');
        // 保持原有后缀名
        form.keepExtensions = true;

        //解析
        form.parse(req, function (err, fields, files) {
            let name = fields.name;
            let filename = path.parse(files.avater.path).base;
            // 存储 img: 网路能请求到的路径     
            let img = 'imgs/' + filename;
            heros.push({
                name, img
            });
            // 同步提交，浏览器等待页面显示
            res.redirect('/');
        })
    })
    // 最后一条路由中
    .all('*', (req, res) => {
        res.send('地址错误，您去首页吧');
    });

// 处理图片
server.use(express.static('./public'));

server.use(router);

// 处理错误
server.use((err, req, res, next) => {
    console.log(err);
    res.send('<h1>亲爱的用户，您访问的页面，有事儿了,<a href="/">去首页看看?</a></h1>');
});

server.listen(8888);