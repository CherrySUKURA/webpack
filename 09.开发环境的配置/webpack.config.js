/**
 * 开发环境配置,能让代码运行
 * 运行项目指令
 * webpack : 会将打包结果输出
 * npx dev-dev-server ： 只会在内存中编译打包
 */


const {resolve} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname,"build")
    },
    module: {
        rules: [
            //loader配置
            {
                //处理less资源
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //处理css资源
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                // use: [
                //     'url-loader'
                // ],
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    //关闭es6模块化
                    esModule: false,
                    outputPath: 'img'
                }
            },
            {
                test: /\.html$/,
                //处理html文件的img图片（负责引入，从而能被url-loader进行处理）
                loader: 'html-loader'
            },
            {
                //处理其他资源
                exclude: /\.(js|html|css|less|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname,"build"),
        compress: true,
        port: 3000,
        open: true
    }
}