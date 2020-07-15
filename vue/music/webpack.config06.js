// webpack  ./code/webpack_test/01_module/main.js -o ./code/webpack_test/01_module/build.js
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        // 可以有多个入口，也可以有一个，如果有一个就默认从这个入口开始分析
        'main': './code/webpack_test/06_singe_file/main.js'
    },
    output: {
        path: path.resolve(path.resolve('./code/webpack_test/06_singe_file/dist')),
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
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        // 插件的执行顺序与元素有关
        new HtmlWebpackPlugin({
            template: './code/webpack_test/06_singe_file/index.html', // 参照物
        })
    ]
}