const dns = require('dns');

dns.resolve('baidu.com', (err, resolve) => {
    if(err)
    {
        console.log('解析失败');
    }
    else
    {
        console.log(resolve);   // [ '123.125.114.144', '220.181.57.216' ]
    }
})
