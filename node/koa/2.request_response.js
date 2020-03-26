const koa = require('koa');
let app = new koa();
app.use((context, next) => {
    // console.log(context.request.url);
    // console.log(context.request.method);
    // console.log(context.request.headers);
    console.log(context.url);
    console.log(context.method);
    console.log(context.headers);
    next();
});

app.use((context, next) => {
    // context.response.set('mytest', '12345');
    // context.response.status = 200;
    // context.response.body = '<h1>大家好</h1>';
    context.set('mytest', '12345');
    context.status = 200;
    context.body = '<h1>大家好</h1>';
});
app.listen(8888);