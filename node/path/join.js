const path = require("path");

console.log(path.join('./', '//a', '\\b', 'cc'));
console.log(path.join(__filename, '//a', '\\b', 'cc'));
console.log(path.join(__dirname, '//a', '\\b', 'cc'));