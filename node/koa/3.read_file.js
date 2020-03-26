const koa = require('koa');
const fs = require('fs');

let app = new koa();

function asyncReadFile() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./index.html', (err, data) => {
            // 失败
            if (err) {
                reject(err);
                return;
            }
            // 成功
            resolve(data);
        });
    });
}

app.use(async ctx => {
    if (ctx.url === '/') {
        console.log('haha');
        // 响应首页
        let data = await asyncReadFile();  // 异常用catch
        console.log(data.toString()); 
        // 以二进制数据返回会当成下载处理
        // ctx.body = data;
        // ctx.body = data.toString();

        // 设置响应头
        ctx.set('content-type', 'text/html;charset=Utf-8');
        ctx.body = data;
    } else {
        // ok
        ctx.body = 'ok';
    }
});
app.listen(8888);