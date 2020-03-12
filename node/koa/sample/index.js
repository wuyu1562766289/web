const Koa = require('koa')
const app = new Koa()


app.use(async (ctx, next) => {
  const start = new Date().getTime();
  console.log(`start ${ctx.url}`);
  await next();
  const end = new Date().getTime();
  console.log(`请求用时：${parseInt(end - start)}ms`);  
});

app.use((ctx, next) => {
  ctx.body = [
    {
      name: 'wd'
    }
  ];
  next();
});

app.use((ctx, next) => {
  console.log('url' + ctx.url);
  if (ctx.url === '/html') {
    ctx.type = 'text/html;charset=utf-8';
    ctx.body = `<b>我的名字是${ctx.body[0].name}</b>`
  }
  next();
});


app.listen(3000, () => {
  console.log(`服务启动在3000端口`);

})