const http = require('http');
const url = require('url');

let server = http.createServer((reg, rej) => {
    //console.log(reg.url);
    let {pathname, query} = url.parse(reg.url, true);
    console.log(pathname, query);
    //rej.end();
});
server.listen(8080);
