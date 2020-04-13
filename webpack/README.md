# webpack 使用

webpack 是一个打包模块化 JavaScript 的工具，会从入口模块出发，识别出源码中的模块化
导入语句，递归的找出入口文件的所有依赖，将入口和其所有的依赖打包到一个单独的文件中。

### 安装

推荐局部安装，不同项目可以使用不同版本;
全局安装会造成版本指定，如果多个项目依赖不同版本，会造成构建失败。
webpack4 安装：`npm i webpack webpack-cli -D`

#### 检查版本

webpack -v
推荐使用 npx webpack -v

#### 指定版本安装

npm i webpack@xxx.xx

#### 卸载

npm uninstall webpack webpack-cli -g

# webpack 默认配置

- 默认入口模块
  ./src/index.js
- 默认输出
  名称 main.js
  路径./dist
- webpack 默认支持多种模块类型，如：commonJS、esmodule、AMD
- webpack 默认支持 js 模块和 json 模块

# 构建

npm webpack
修改 package.json：
`"scripts": { "test": "webpack" },`
