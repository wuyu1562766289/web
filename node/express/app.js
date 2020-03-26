// 1.引入express第三方对象
const express = require('express');

// 2.构建一个服务器对象
let server = express();

// 3.开启服务器监听端口
server.listen(8888);

// 4.处理响应
server.use((req, res) => {
    res.end('hello world!');
});