// 内置模块
// const os = require('os');
// const mem = 100 - os.freemem() / os.totalmem * 100;
// console.log(`内存占用率:${mem.toFixed(2)}%`);


// 第三方模块
// 下载
// const download = require('download-git-repo');
// // 进度条
// const ora = require('ora');
// const process = ora(`下载项目。。。`);
// process.start();

// 异步执行方式
// download('github:su37josephxia/vue-template', '../test', err => {
//   // console.log(err ? 'Error' : 'Success');  
//   if(err) {
//     process.fail();
//   } else {
//     process.succeed();
//   }
// });


// 将回调函数方式改造为Promise方式，只有回调函数为最后一个参数且回调函数中的
// 第一个参数为err才支持该写法
// const src = 'github:su37josephxia/vue-template';
// const dir = '../test';

// async function clone(src, dir) {
//   const { promisify } = require('util');
//   // 若第三方接口使用的是回调函数方式，可以将其包装成Promise的方式来执行
//   const download = promisify(require('download-git-repo'));
//   const ora = require('ora');
//   const process = ora(`下载项目。。。`);
//   process.start();

//   try {
//     await download(src, dir);
//     process.succeed();
//   } catch (error) {
//     process.fail();
//   }
// }
// clone(src, dir);

const src = 'github:su37josephxia/vue-template';
const dir = '../test';
const { clone } = require('./download');

// async function clone(src, dir) {
//   const { promisify } = require('util');
//   // 若第三方接口使用的是回调函数方式，可以将其包装成Promise的方式来执行
//   const download = promisify(require('download-git-repo'));
//   const ora = require('ora');
//   const process = ora(`下载项目。。。`);
//   process.start();

//   try {
//     await download(src, dir);
//     process.succeed();
//   } catch (error) {
//     process.fail();
//   }
// }
clone(src, dir);