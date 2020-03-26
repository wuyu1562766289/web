const crypto = require('crypto');

//let obj = crypto.createHash('md5');
let obj = crypto.createHash('sha1');
// obj.update('123456');

obj.update('123');
obj.update('4');
obj.update('56');

// console.log(obj.digest('hex'));     // e10adc3949ba59abbe56e057f20f883e
console.log(obj.digest('hex'));         // 7c4a8d09ca3762af61e59520943dc26494f8941b
