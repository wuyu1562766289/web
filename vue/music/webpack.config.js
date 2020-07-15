// webpack  ./code/webpack_test/01_module/main.js -o ./code/webpack_test/01_module/build.js
const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        // 可以有多个入口，也可以有一个，如果有一个就默认从这个入口开始分析
        'main': './code/webpack_test/04_webpack_dev_server/main.js'
    },
    output: {
        path: path.resolve(path.resolve('./code/webpack_test/04_webpack_dev_server/dist')),
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
                test: /\.css$/,
                // 解析的时候先右后左
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                // 解析的时候先右后左
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]?[hash]',    // 打包文件名
                            publicPath: path.resolve('./code/webpack_test/04_webpack_dev_server/dist/img'),  // 打包的公共路径
                            outputPath: 'img',  //打包文件放在img文件夹中
                            limit: 3000, // 打包的图片文件小于50000Byte时, 将图片编译成base64的形式，进行打包。如果大于50000Byte时，则使用file-loader进行打包
                        }
                    }                    
                ]
            }
        ]
    },
    plugins: [
        // 插件的执行顺序与元素有关
        new HtmlWebpackPlugin({
            template: './code/webpack_test/04_webpack_dev_server/index.html', // 参照物
        })
    ]
}