module.exports = {
  index: async app => {
    // ctx.body = 'Controller index';
    app.ctx.body = await app.$model.user.findAll();
  },
  detail: app => {
    app.ctx.body = 'Controller detail';
  }
}