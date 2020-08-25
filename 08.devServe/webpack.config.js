

const {resolve} = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname,"build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader',
                options: {
                    name: "[hash:10].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",

    //开发服务器devServer： 用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    //特点：只会在内存中编译打包，不会有任何输出
    //下载webpack-dev-server的npm包
    //启动devServer指令为： npx webpack-dev-server
    devServer: {
        //项目构建后的路径
        contentBase: resolve(__dirname,"build"),
        //启动gzip压缩
        compress: true,
        //多口号
        port: 3000,
        //自动打开浏览器
        open: true
    }
}