const OS = require('os');

//console.log(OS.cpus());
console.log(OS.freemem()/1024/1024/1024 + 'G');
