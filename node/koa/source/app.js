const WKoa = require('./wkoa');
const app = new WKoa();

// app.use((req, res) => {
//   res.writeHead(200);
//   res.end('hey wangxing');
// });

app.use(ctx => {
  ctx.body = 'haha';
});

app.listen(3000, () => {
  console.log('listen at 3000');
});