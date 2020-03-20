'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 获取中间件
  const jwt = app.middleware.jwt({ app });

  router.get('/', controller.home.index);

  // 该接口需要登录后才能获取到
  // 从token信息中拿到用户数据，然后查库返回内容
  router.get('/user/info', jwt, controller.user.info);
  // 验证码
  router.get('/user/captcha', controller.user.captcha);
  // 注册
  router.post('/user/register', controller.user.create);
  // 登录
  router.post('/user/login', controller.user.login);
};
