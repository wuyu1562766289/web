- 官⽅方⽹网站：<https://webpack.js.org/>

# webpack 使用

webpack 是一个打包模块化 JavaScript 的工具，会从入口模块出发，识别出源码中的模块化
导入语句，递归的找出入口文件的所有依赖，将入口和其所有的依赖打包到一个单独的文件中。

### 1. 安装

推荐局部安装，不同项目可以使用不同版本;
全局安装会将项目中的 webpack 锁定到指定版本，造成不同项目中因为依赖不同版本而导致冲突，从而导致构建失败。

webpack4 安装：`npm i webpack webpack-cli -D`

#### 检查版本

```js
webpack -v  // command not found 默认在全局环境中查找
npx webpack -v // npx帮助我们在项⽬中的node_modules⾥查找webpack
./node_modules/.bin/webpack -v // 到当前的node_modules模块⾥查找指定webpack
```

#### 指定版本安装

npm i webpack@< version >

#### 卸载

npm uninstall webpack webpack-cli -g

# 2. 构建

## 2.1 webpack 默认配置

- 默认入口模块
  ./src/index.js
- 默认输出
  名称 main.js
  路径./dist
- webpack 默认支持多种模块类型，如：commonJS、esmodule、AMD
- webpack 默认支持 js 模块和 json 模块
  npm webpack
  修改 package.json：
  `"scripts": { "test": "webpack" },`

  ```js
  const path = require("path");
  module.exports = {
    // 必填 webpack执⾏行行构建⼊入⼝口
    entry: "./src/index.js",
    output: {
      // 将所有依赖的模块合并输出到main.js
      filename: "main.js",
      // 输出⽂文件的存放路路径，必须是绝对路路径
      path: path.resolve(__dirname, "./dist"),
    },
  };
  ```

## 2.2 准备执行构建

- 新建 src ⽂件夹
- 新建 src/index.js、src/index.json、src/other.js

```js
// index.js
const json = require("./index.json"); // commonJS
import { add } from "./other.js";     // es module
console.log(json, add(2, 3));

// index.json
{
  "name": "JOSN"
}

// other.js
export function add(n1, n2) {
  return n1 + n2;
}
```

## 2.3 执行构建

```js
// npx方式
npx webpack
// npm script
npm run test

// 修改package.json文件：
"scripts": {
  "test": "webpack"
},

// 原理就是通过shell脚本在node_modules/.bin目录下创建一个软链接。
```

# 3. webpack 配置核心概念

零配置很弱，特定的需求，总是需要自进行配置

webpack 有默认的配置文件，叫 webpack.config.js ，我们可以对这个
⽂件进行修改，进⾏个性化配置。

- 使用默认的配置文件：webpack.config.js
- 使⽤自定义配置文件： 如 webpack.dev.config.js，可以通过--config
  webpackconfig.js 来指定 webpack 使用哪个配置文件来执行构建

```js
// webpack.config.js配置基础结构
module.exports = {
  entry: "./src/index.js", // 打包⼊口⽂件
  output: "./dist", // 输出结构
  mode: "production", // 打包环境
  module: {
    rules: [
      // loader模块处理
      {
        test: /\.css$/,
        use: "style-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()], // 插件配置
};
```

## 3.1 entry

指定 webpack 打包入口⽂件:Webpack 执行构建的第⼀步将从 Entry 开始，可抽象成输⼊

```js
// 单⼊⼝ SPA，本质是个字符串
entry: {
  main: "./src/index.js";
}
// ==相当于简写===
entry: "./src/index.js";
// 多⼊口 entry是个对象
entry: {
  index: "./src/index.js",
  login: "./src/login.js"
}
```

## 3.2 output

打包转换后的文件输出到磁盘位置:输出结果，Webpack 经过⼀系列处理并得出最终想要的代码后输出结果。

```js
output: {
  filename: "bundle.js",// 输出⽂件的名称
  path: path.resolve(__dirname, "dist")// 输出⽂件到磁盘的目录，必须是绝对路径
},
// 多⼊口的处理
output: {
  filename: "[name][chunkhash:8].js", // 利用占位符，⽂件名称不要重复
  path: path.resolve(__dirname, "dist") // 输出文件到磁盘的目录，必须是绝对路径
},
```

## 3.3 mode

Mode ⽤来指定当前的构建环境:

- production
- development
- none

开发阶段开启有利于热更新的处理，识别哪个模块变化

生产阶段开启有助模块压缩，处理理副作用等一些功能

## 3.4 loader

模块解析，模块转换器，⽤于把模块原内容按照需求转换成新内容。
webpack 是模块打包⼯具，⽽模块不仅是 js，还可以是 css，图片或者其他格式但是 webpack 默认只知道如何处理 js 和 JSON 模块，那么其他格式的模块处理，和处理方式就需要 loader 了

```js
// 常见的loader
style - loader;
css - loader;
less - loader;
sass - loader;
ts - loader; // 将Ts转换成js
babel - loader; // 转换ES6、7等js新特性语法
file - loader; // 处理图⽚⼦图
eslint - loader;
```

## 3.5 moudle

模块，在 Webpack ⾥一切皆模块，一个模块对应着一个⽂件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
当 webpack 处理到不认识的模块时，需要在 webpack 中的 module 处进⾏配置，检测到是什么格式的模块，使⽤什么 loader 来处理。

```js
// loader有顺序，从右到左，从下到上
module: {
  rules: [
    {
      test: /\.xxx$/, // 指定匹配规则
      use: {
        loader: "xxx-load", // 指定使⽤的loader
      },
    },
  ];
}
```

## 3.6 Plugins

plugin 可以在 webpack 运行到某个阶段的时候，帮你做一些事情，类似于⽣命周期的概念

扩展插件，在 Webpack 构建流程中的特定时机注⼊扩展逻辑来改变构建结
果或做你想要的事情。

作⽤于整个构建过程

```js
// htmlwebpackplugin会在打包结束后，自动生成一个html文件，并把打包⽣成的js模块引入到该html中。
// npm install --save-dev html-webpack-plugin
plugins: [
  new htmlWebpackPlugin({
    title: "My App",
    filename: "app.html",
    template: "./src/index.html",
  }),
];
```

## 3.7 sourceMap

源代码与打包后的代码的映射关系，通过 sourceMap 定位到源代码。

在 dev 模式中，默认开启，可以在配置文件`devtool:"none"`设置关闭

devtool 的介绍：<https://webpack.js.org/configuration/devtool#devtool>

eval: 速度最快,使用 eval 包裹模块代码

source-map： 产⽣生 .map 文件

cheap: 较快，不包含列信息

Module：第三方模块，包含 loader 的 sourcemap（比如 jsx to js ，babel 的 sourcemap）

inline： 将 .map 作为 DataURI 嵌入，不单独生成 .map 文件

配置推荐：

```js
devtool: "cheap-module-eval-source-map", // 开发环境配置
// 线上不推荐开启
devtool: "cheap-module-source-map", // 线上生成配置
```
