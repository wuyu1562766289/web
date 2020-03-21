'use strict';

// 中间件
// 路由中使用
module.exports = ({ app }) => {
  return async function verify(ctx, next) {
    // 获取token + 认证
    const token = ctx.request.header.authorization.replace('Bearer ', '');
    try {
      const ret = await app.jwt.verify(token, app.config.jwt.secret);
      // console.log('中间件解密token信息：', ret);
      ctx.state.email = ret.email;
      ctx.state.userid = ret._id;
      await next();
    } catch (error) {
      // eslint-disable-next-line eqeqeq
      if (error.name == 'TokenExpiredError') {
        // eslint-disable-next-line no-return-assign
        return ctx.body = {
          code: -666,
          message: '登录过期',
        };
      }
      console.log('中间件错误：', error);
    }
  };
};
