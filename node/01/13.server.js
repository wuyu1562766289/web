const http = require('http');
const fs = require('fs');

/*
get: 在url里传输内容
     作为header
     内容小于32k

post: 在body里传输数据
      1G
 */

let server = http.createServer((reg, res) => {
    fs.readFile(`www${reg.url}`, (err, data) => {
        if (err) {
            res.writeHeader(404);       // 针对header(network错误码)
            res.write('Not find!');     // 针对body
        } else {
            res.write(data);
        }

        res.end();
    });
});
server.listen(8080);
