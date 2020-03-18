'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAll() {
    // return [
    //   {name: 'service...'}
    // ]
    // 添加测试数据
    const User = this.ctx.model.User;
    // 添加一次即可
    // await User.sync({ force: true });
    // await User.create({
    //   name: "wang"
    // });

    return await User.findAll();
  }
}

module.exports = UserService;