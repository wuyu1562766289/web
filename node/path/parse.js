const path = require("path");

let sSrc = __filename;

let oDest = path.parse(sSrc);

console.log(oDest);
