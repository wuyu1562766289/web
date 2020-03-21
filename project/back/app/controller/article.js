'use strict';

const BaseController = require('./base');
const marked = require('marked');

class ArticleController extends BaseController {
  async create() {
    const { ctx } = this;
    const { userid } = ctx.state;
    const { content } = ctx.request.body;
    const title = content.split('\n').find(v => {
      // eslint-disable-next-line eqeqeq
      return v.indexOf('# ') == 0;
    });
    console.log(title);
    console.log(ctx);

    const obj = {
      title: title.replace('# ', ''),
      article: content,
      article_html: marked(content),
      author: userid,
    };
    console.log(obj);

    const ret = await ctx.model.Article.create(obj);
    if (ret._id) {
      this.success({
        id: ret._id,
        title: obj.title,
      });
    } else {
      this.error('创建失败');
    }
  }
  async detail() {
    const { ctx } = this;
    const { id } = ctx.params;
    const info = await ctx.model.Article.findOneAndUpdate({ _id: id }, { $inc: { views: 1 } }).populate('author');
    // const info = await ctx.model.Article.find({ _id: id }.select('article'));
    this.success(info);
  }
  async list() {
    const { ctx } = this;
    const ret = await ctx.model.Article.find().populate('author');
    this.success(ret);
  }
}

module.exports = ArticleController;
