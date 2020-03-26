const fs = require("fs");

// 读取文件夹数据
fs.readdir('./', (err, files) => {
    if (err) {
        return;
    }
    console.log(files);
    
    // 获取文件状态
    fs.stat('./read.txt', (err, stats) => {
        console.log(stats);
        
    });

    // 判断文件或文件夹是否存在
    fs.access('./read.txt', err => {
        console.log(`read.txt ${err ? '不存在' : '存在'}`);
        
    });

    // 判断文件是否存在且该文件是否可写
    fs.access('./read.txt', fs.constants.F_OK | fs.constants.W_OK, err => {
        if (err) {
            console.error(`read.txt ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
        } else {
            console.log('文件存在且可写！');
        }
    });
})

/* fs.stat('./', (err, stats) => {
    err && console.log(stats);
    
}) */