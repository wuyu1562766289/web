const fs = require("fs");

let data = fs.readFileSync('./read.txt', 'Utf-8');
console.log(data);
fs.writeFileSync('./write.txt', data);