const path = require('path');

let src = '/www/web/ext/ext.js';

// 目录
console.log(path.dirname(src));     // /www/web/ext
// 文件名
console.log(path.basename(src));    // ext.js
// 文件类型
console.log(path.extname(src));     // .js
