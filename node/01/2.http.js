const http = require('http');
let server = http.createServer((req, res) => {
    // req:        请求   接收的数据（输入）
    // res:        响应   发送的数据（输出）

    res.write('hello world!');
    res.end();
});

// 监听
server.listen(8090);
