// 1.引入对象
const express = require('express');
// 2.创建服务器对象
let server1 = express();
// 3.处理响应
server1.use((req, res, next) => {
    // express中保留了原生node中的api
    res.send('express ok!');
});
// 4.监听端口
server1.listen(8888, () => {
    console.log('服务器启动在8888端口');
});


/* 
    koa
*/
// 1.引入对象
const koa = require('koa');
// 2.创建服务器对象
let server2 = new koa();
// 3.处理响应
server2.use(context => {
    context.body = 'koa ok!';
});
// 4.监听端口
server2.listen(9999, () => {
    console.log('服务器启动在9999端口');
});