module.exports = async (ctx, next) => {
    // 判断是否以/user开头
    if (ctx.url.startsWith('/user')) {
        await next();
        return;
    }

    // 需要验证
    if (!ctx.session.user) {
        // url重写
        // ctx.url = '/user/login';
        ctx.body = `
            <div>
                没有登录，请去登录<a href="/user/login">登录</a>
            </div>
        `;
        return;
    }
    await next();
}