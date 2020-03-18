// const app = new (require('koa'))();
// const { initRouter } = require('./w-loader');
// app.use(initRouter().routes());

// app.listen(3000);

const wegg = require('./wegg');
const app = new wegg();
app.start(3000);