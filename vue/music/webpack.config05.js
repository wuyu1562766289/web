// webpack  ./code/webpack_test/01_module/main.js -o ./code/webpack_test/01_module/build.js
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        // 可以有多个入口，也可以有一个，如果有一个就默认从这个入口开始分析
        'main': './code/webpack_test/05_es6/main.js'
    },
    output: {
        path: path.resolve(path.resolve('./code/webpack_test/05_es6/dist')),
        filename: 'build.js'
    },
    watch: true,    //文件监视改动 自动产出build.js
    // mode: 'production',
    mode: 'development',
    // 声明模块
    // 包含各个loader
    module: {
        rules: [
            {
                test: /\.js$/,
                // 处理ES6,7,8
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // 插件的执行顺序与元素有关
        new HtmlWebpackPlugin({
            template: './code/webpack_test/05_es6/index.html', // 参照物
        })
    ]
}