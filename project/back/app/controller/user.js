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
      const { nickname, _id } = user;
      console.log(user);

      const token = app.jwt.sign({
        nickname,
        email,
        _id,
      }, app.config.jwt.secret, {
        expiresIn: '10h',
      });
      this.success({ token, email, nickname, _id });
      // this.success('登录成功');
    } else {
      this.error('用户名或密码错误');
    }
  }

  async isFollow() {
    const { ctx } = this;
    const me = await ctx.model.User.findById(ctx.state.userid);
    // eslint-disable-next-line eqeqeq
    const isFollow = !!me.following.find(v => v.toString() == ctx.params.id);
    this.success({ isFollow });
  }
  async follow() {
    // 把关注的用户id放在following字段中
    const { ctx } = this;
    const me = await ctx.model.User.findById(ctx.state.userid);
    // eslint-disable-next-line eqeqeq
    const isFollow = !!me.following.find(v => v.toString() == ctx.params.id);
    if (!isFollow) {
      me.following.push(ctx.params.id);
      me.save();
      this.message('关注成功');
    } else {
      this.message('关注失败');
    }
  }
  async unfollow() {
    // 取消关注
    const { ctx } = this;
    const me = await ctx.model.User.findById(ctx.state.userid);
    // eslint-disable-next-line eqeqeq
    const index = me.following.map(id => id.toString().indexOf(ctx.params.id));
    if (index > -1) {
      me.following.splice(index, 1);
      me.save();
      this.message('已取消关注');
    }
  }

  async following() {
    // 加载关注的人
    const { ctx } = this;
    const users = await ctx.model.User.findById(ctx.params.id).populate('following');
    this.success(users.following);
  }
  async followers() {
    // 加载粉丝
    const { ctx } = this;
    const users = await ctx.model.User.find({ following: ctx.params.id });
    this.success(users);
  }
  async articleStatus() {
    const { ctx } = this;
    const data = await ctx.model.User.findById(ctx.state.userid);
    const like = !!data.likeArticle.find(id => id.toString() == ctx.params.id);
    this.success({ like });
  }
  async likeArticle() {
    const { ctx } = this;
    const data = await ctx.model.User.findById(ctx.state.userid);
    if (!data.likeArticle.find(id => id.toString() == ctx.params.id)) {
      data.likeArticle.push(ctx.params.id);
      data.save();
      await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { like: 1 } })
      return this.message('点赞成功');
    }
    return this.message('您已经点过攒啦~');
  }
  async cancellikeArticle() {
    const { ctx } = this;
    const data = await ctx.model.User.findById(ctx.state.userid);
    const index = data.likeArticle.map(id => id.toString()).indexOf(ctx.params.id);
    if (index > -1) {
      data.likeArticle.splice(index, 1);
      data.save();
      await ctx.model.Article.findByIdAndUpdate(ctx.params.id, { $inc: { like: -1 } });
      return this.message('已成功取消');
    }
  }
}

module.exports = UserController;
