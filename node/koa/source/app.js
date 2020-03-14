const WKoa = require('./wkoa');
const app = new WKoa();

// app.use((req, res) => {
//   res.writeHead(200);
//   res.end('hey wangxing');
// });

// app.use(ctx => {
//   ctx.body = 'haha';
// });

// const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000));
// app.use(async (ctx, next) => {
//     ctx.body = "1";    
//     await next();
//     ctx.body += "5";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "2";
//     await delay();
//     await next();
//     ctx.body += "4"; 
// });
// app.use(async (ctx, next) => {
//     ctx.body += "3";
// });

app.listen(3000, () => {
  console.log('listen at 3000');
});