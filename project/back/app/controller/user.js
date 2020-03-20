'use strict';

const BaseController = require('./base');
const md5 = require('md5');
const HashSalt = 'WangXing@Die123';

class UserController extends BaseController {
  async info() {
    // const { ctx } = this;
    // ctx.body = {
    //   code: 0,
    //   data: {
    //     name: 'wangxing',
    //   },
    // };
    // this.success({
    //   name: 'hello world!',
    // });
    const { ctx } = this;
    const { email } = ctx.state;
    const user = await this.checkEmail(email);
    this.success(user);
  }
  async captcha() {
    // controller只写业务逻辑，公用功能，抽象成service
    // 生成验证码
    const { ctx } = this;
    const captcha = this.service.tools.captcha();
    console.log(`图片验证码：${captcha.text}`);
    ctx.session.captcha = captcha.text;

    ctx.response.type = 'image/svg+xml';
    ctx.body = captcha.data;
  }
  async checkEmail(email) {
    const user = await this.ctx.model.User.findOne({ email });
    // console.log(user);

    return user;
  }
  async create() {
    // 新增用户
    const { ctx } = this;
    const { captcha, email, password, nickname } = ctx.request.body;
    if (captcha.toUpperCase() === ctx.session.captcha.toUpperCase()) {
      // 新增用户
      // MongoDB里面新增数据
      // 邮箱和昵称不能重复
      if (await this.checkEmail(email)) {
        return this.error('邮箱已被注册');
      }
      const ret = await ctx.model.User.create({
        email,
        nickname,
        // 密码再次加盐加密
        password: md5(password + HashSalt),
      });

      if (ret._id) {
        this.success('新增成功');
      }
    } else {
      this.error('验证码错误');
    }
  }

  async login() {
    // 登录
    // 校验用户名和密码
    const { ctx, app } = this;
    const { email, password } = ctx.request.body;
    const user = await ctx.model.User.findOne({
      email,
      password: md5(password + HashSalt),
    });

    if (user) {
      // hash生成
      const { nickname } = user;
      const token = app.jwt.sign({
        nickname,
        email,
        _id: user._id,
      }, app.config.jwt.secret, {
        expiresIn: '60s',
      });
      this.success({ token, email, nickname });
    } else {
      this.error('用户名或密码错误');
    }
  }
}

module.exports = UserController;
