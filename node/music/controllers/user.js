const userModel = require('../models/user');
const captchapng = require('captchapng2');

module.exports = {
    showRegister: async (ctx, next) => {
        let users = await userModel.getUsers();
        console.log(users);
        
        ctx.render('register');
    },
    checkUsername: async (ctx, next) => {
        // 处理接收请求之类的繁琐事务，唯独不处理

        let { username } = ctx.request.body;
        // 查询数据库中是否存在该用户名
        let users = await userModel.findUserByUsername(username);
        // 判断users数组的长度是否为0        
        if (users.length === 0) {
            ctx.body = {code: '001', msg: '可以注册！'}
            return;
        }
        // 存在该用户
        ctx.body = { code: '002', msg: '用户名已经存在！' };
    },
    doRegister: async (ctx, next) => {
        try {
            let { username, password, email, v_code } = ctx.request.body;
            
            // 比较v_code
            if (v_code !== ctx.session.v_code) {
                ctx.body = {
                    code: '002',
                    msg: '验证码不正确！'
                };
                return;
            }

            // 判断用户名是否存在
            let users = await userModel.findUserByUsername(username);
            // 判断是否可以注册        
            if (users.length !== 0) {
                ctx.body = { code: '002', msg: '用户已存在！' }
                return;
            }
            // 开始注册
            let result = await userModel.registerUser(username, password, email);
            // console.log(result); 
            if (result.affectedRows === 1) {
                ctx.body = { code: '001', msg: '注册成功！' };
                return;
            }

            // 不等于1的情况会发生在id冲突，就不插入数据
            ctx.body = { code: '002', msg: result.message };
        } catch (e) {
            // 判断e的一些信息code
            console.log(e);
            
            ctx.throw('002');
        }
    },
    async doLogin (ctx, next) {
        // 1.接收参数
        let { username, password } = ctx.request.body;
        console.log(username+password);
        
        // 2.查询用户名相关用户
        let users = await userModel.findUserDataByUsername(username);
        if (users.length === 0) {
            // 避免黑客去试探用户名正确的情况，模糊错误
            ctx.body = { code: '002', msg: '用户名或密码不正确' };
            return;            
        }
        let user = users[0];    // 注册时必须控制不能存在相同用户
        // console.log(user);
        
        // 3.对比密码是否一致
        console.log(user.password === password);
        
        if (user.password === password) {
            // 3.1. 如果密码正确，认证用户 session放属性区分是否登录
            ctx.body = { code: '001', msg: '登录成功！' };

            // 挂载session用户认证判断
            ctx.session.user = username;

            return;
        }

        // 3.2. 响应json结果
        ctx.body = { code: '002', msg: '用户名或密码不正确' };
    },
    // 获取验证码图片
    async getPic(ctx, next) {
        let rand = parseInt(Math.random() * 9000 + 1000);
        // 区分不同用户的答案，并分配session，响应cookie
        ctx.session.v_code = rand + '';

        let png = new captchapng(80, 30, rand); // width,height, numeric captcha
        
        ctx.body = png.getBuffer();
    },
    async logout(ctx, next) {
        // 1. 清除session上的user
        // 2. 重定向一个页面到登录页面
        ctx.session.user = null;
        ctx.redirect('/user/login');
    }
}