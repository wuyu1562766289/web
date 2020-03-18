const koa = require('koa');
const { initRouter, initController, initService, initSchedule, loadConfig } = require('./w-loader');

class wegg {
  constructor(conf) {
    this.$app = new koa(conf);
    // 加载配置项
    loadConfig(this);
    this.$service = initService();
    this.$ctrl = initController();
    this.$router = initRouter(this);
    this.$app.use(this.$router.routes());
    // console.log(this.$router.routes);
    // console.log(this.$router);
    initSchedule();
  }

  start(port) {
    this.$app.listen(port, () => {
      console.log('服务器启动成功 端口：' + port);
    })
  }
}

module.exports = wegg;