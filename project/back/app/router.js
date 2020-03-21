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
  // router.get('/user/info', jwt, controller.user.info);
  // // 验证码
  // router.get('/user/captcha', controller.user.captcha);
  // // 注册
  // router.post('/user/register', controller.user.create);
  // // 登录
  // router.post('/user/login', controller.user.login);

  // router.get('/user/isfollow/:id', jwt, controller.user.isFollow);
  // router.put('/user/follow/:id', jwt, controller.user.follow);
  // router.delete('/user/unfollow/:id', jwt, controller.user.unfollow);
  router.group({ name: 'user', prefix: '/user' }, router => {
    const {
      info,
      captcha,
      create,
      login,
      isFollow,
      follow,
      unfollow,
      following,
      followers,
      articleStatus,
      likeArticle,
      cancellikeArticle,
    } = controller.user;

    router.get('/info', jwt, info);
    // 验证码
    router.get('/captcha', captcha);
    // 注册
    router.post('/register', create);
    // 登录
    router.post('/login', login);
    router.get('/isfollow/:id', jwt, isFollow);
    router.put('/follow/:id', jwt, follow);
    router.delete('/unfollow/:id', jwt, unfollow);

    router.get('/:id/following', following);
    router.get('/:id/followers', followers);
    router.get('/article/:id', jwt, articleStatus);
    router.put('/likeArticle/:id', jwt, likeArticle);
    router.delete('/likeArticle/:id', jwt, cancellikeArticle);
  });

  router.group({ name: 'article', prefix: '/article' }, router => {
    const { create, detail, list } = controller.article;
    router.post('/create', jwt, create);
    router.get('/:id', detail);
    router.get('/', list);
  });
};
