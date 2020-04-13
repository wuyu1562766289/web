// webpack是基于nodejs的
// 要使用CommonJS规范导出一个对象

const path = require("path");
module.exports = {
  // webpack执行入口
  entry: "./src/index.js",
  // 输出
  output: {
    // 输出到哪里，必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },
  // 模式（开发模式不压缩代码）
  mode: "development"
}