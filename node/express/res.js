const express = require('express');

let server = express();

let router = express.Router();

router.get('/json', (req, res) => {
    res.json({ name: 'wangxing', age: '18' });
})
    .get('/redirect', (req, res) => {
        res.redirect('http://www.baidu.com');
    })
    .get('/download', (req, res) => {
        // 基于服务器回写的content-type，等头信息
        res.download('./app.js');
    })
    .get('/jsonp', (req, res) => {
        res.jsonp('wangxing love wd');
    });

server.use(router);

server.listen(8888);