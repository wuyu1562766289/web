const wexpress = require('./wexpres.js');

const app = wexpress();

app.get('/', (res, req) => {
  req.end('hello node');
});

app.listen(3000);