// webpack是基于nodejs的
// 要使用CommonJS规范导出一个对象

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  // webpack执行入口
  entry: "./src/index.js",
  // 输出
  output: {
    // 输出到哪里，必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  },
  // 模式（开发模式不压缩代码）
  mode: "development",
  // 模块
  module: {
    rules: [
      //! loader是有执行顺序的，顺序是自右往左
      // 处理图片
      {
        test: /\.(png|jpe?g|gif)$/,
        // use: ["file-loader"]
        use: [
          {
            loader: "file-loader",
            options: {
              // hash:当前构建的版本号，冒号后的数字为截取长度；便于做浏览器缓存
              name: "[name]_[hash:8].[ext]"
            }
          }
        ]
      },
      // 处理css
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"]
        use: [
          {
            loader: "style-loader",
            options: {
              // 将多个style样式合并到一个style中
              injectType: "singletonStyleTag"
            }
          },
          "css-loader"
        ]
      },
      // 处理less
      {
        test: /\.less$/,
        // use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
        // 不用插入style的方式，提取出一个单独的css文件
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
      },
      // 处理字体
      {
        test: /\.woff2$/,
        // use: ["file-loader"]
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
    ]
  },
  // 创建打包后的代码和源码的映射关系，便于开发过程中快速定位错误。生成环境建议使用none
  devtool: "cheap-module-eval-source-map",
  plugins: [
    // 根据html模板生成html文件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "wx.html"
    }),
    // 构建前先清理当前已存在文件
    new CleanWebpackPlugin(),
    // 将css提取成一个单独的文件
    new MiniCssExtractPlugin({
      filename: "[name]_[chunkhash:8].css"
    }),
    // html热更新，webpack自带的一个插件
    new webpack.HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: "./build",
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8090"
      }
    }
  }
}