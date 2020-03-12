const http = require('http');
const context = require('./context');
const response = require('./response');
const request = require('./request');

class WKoa {
  listen(...args) {
    const server = http.createServer((req, res) => {
      // 构建上下文
      const ctx = this.createContext(req, res);

      // this.callback(req, res);
      this.callback(ctx);
      // 响应
      res.end(ctx.body);
    });
    server.listen(...args);
  }
  use(callback) {
    this.callback = callback;
  }

  // 构建上下文
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);

    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;

    return ctx;
  }
}

module.exports = WKoa;