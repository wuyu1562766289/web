'use strict';

const Controller = require('egg').Controller;

// controller的父类，提供公用方法
class BaseController extends Controller {
  // 提供成功数据
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }
  // 提供成功消息
  message(message) {
    this.ctx.body = {
      code: 0,
      message,
    };
  }
  // 提供错误信息
  error(message, code = -1) {
    this.ctx.body = {
      code,
      message,
    };
  }
}

module.exports = BaseController;
