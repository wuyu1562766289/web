const fs = require('fs');

// 同步调用
// const data = fs.readFileSync('./download.js');
// console.log(data);

// fs.readFile('./download.js', (err, data) => {
//   if(err) throw err
//   console.log(data.toString());
// })

// const {promisify} = require('util');
// const readFile = promisify(fs.readFile);
// readFile('./run.js').then((result) => {
//   console.log(result.toString());
  
// }).catch((err) => {
//   console.log(err);
  
// });


(async () => {
  const {promisify} = require('util');
  const readFile = promisify(fs.readFile);

  const data = await readFile('./run.js');
  console.log(data.toString());
})()