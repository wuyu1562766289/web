module.exports = () => {
    return async (ctx, next) => {
        try {
            // 先放行
            await next();
        } catch (e) {
            console.log(e);

            // e.code之类的状态码002
            ctx.render('error', { msg: '002状态错误，原因是：xxxx' });
        }
    }
}