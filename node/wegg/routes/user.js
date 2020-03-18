module.exports = {
  'get /': async app => {
    const name = await app.$service.user.getName();
    app.ctx.body = '用户名：' + name;
  },
  'get /detail': async app => {
    app.ctx.body = '用户年龄：' + app.$service.user.getAge();
  }
}