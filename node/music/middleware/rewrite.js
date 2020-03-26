/* 
    需求： 1.以/public开头，使用其他部分（正则）
          2.精确：/ 或者 /abc 要替换成 /xxx
          2.2.模糊： /xxx 开头 替换成 /aaa
*/
module.exports = (rules) => {
    return async (ctx, next) => {
        // 一个ctx.url 对应多条规则的匹配
        /* [
            { regex: /\/abc/, dist: '/user/login' },
            { regex: /\/public(.*)/, dist: null },  // dist:null则使用.*的内容
            { src: '/', dist: '/user/login' }
        ] */
        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i];
            // 是否需要使用正则
            if (rule.regex) {
                let result = rule.regex.exec(ctx.url);
                // result不匹配null或者匹配
                if (result) {
                    // 判断是直接赋值，还是取分组的内容
                    if (!rule.dist) {
                        // 还是取分组的内容
                        ctx.url = result[1];
                    } else {
                        ctx.url = rule.dist;
                    }
                }
            }
            // 字符串精确匹配
            if (rule.src === ctx.url) {
                ctx.url = rule.dist;
            }
        }

        // 放行
        await next();
    }
}