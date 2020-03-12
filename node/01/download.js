module.exports.clone = async function clone(src, dir) {
  const { promisify } = require('util');
  // 若第三方接口使用的是回调函数方式，可以将其包装成Promise的方式来执行
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`下载项目。。。`);
  process.start();

  try {
    await download(src, dir);
    process.succeed();
  } catch (error) {
    process.fail();
  }
}
