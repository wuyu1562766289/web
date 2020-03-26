const fs = require('fs');

// 读取文件，获取文件数据
/*fs.readFile('1.txt', (err, data) => {
    if (err) {
        console.log('出错了');
    } else {
        console.log(data); // <Buffer 5b 31 2c 32 2c 33 2c 34 5d 0d 0a>
        // 只能对文本文件进行toString
        console.log(data.toString());   // [1,2,3,4]
    }
})*/

// 存在则覆盖，不存在则创建（追加使用appendFile）
/* fs.writeFile('2.txt', '我会自己创建文件，我是文件内容', err => {
    if(err)
    {
        console.log('出错了');
    }
    else
    {
        console.log('成功');
    }
}) */

fs.readFile('sousuo.ico', (err, data) => {
    if (err) {
        console.log('出错了');
    } else {
        fs.writeFile('sousuo-cp.ico', data, err => {
            if (err) {
                console.log('失败了');
            } else {
                console.log('写入成功');
            }
        })
    }
})
