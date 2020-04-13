// 兼容css3特性
module.exports = {
  plugins: [require("autoprefixer")({
    // 兼容最近的两个版本，市场份额占有率在1%以上的浏览器
    overrideBrowserslist: ["last 2 version", ">1%"]
  })]
}