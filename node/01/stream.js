const fs = require('fs');
const rs = fs.createReadStream('../img/img.jpg');
const ws = fs.createWriteStream('../img/img1.jpg');
// 会将img.jpg复制一份存为img1.jpg
rs.pipe(ws);