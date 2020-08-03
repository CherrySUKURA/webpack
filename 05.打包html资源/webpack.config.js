/*
    loader: 1.下载 2.使用( 配置loader )
    plugins： 1.下载 2.引入 3.使用
*/
const {resolve} = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            //loader的配置
            // {
            //     //loader
            // }
        ]
    },
    plugins: [
        //plugins的配置
        // html-webpack-plugin
        //功能： 默认会创建一个空的HTML，自动引入打包输出的所有资源
        //需求：需要有结构的HTML文件
        new HtmlWebpackPlugins({
            //复制'./src/index.html'文件，并自动一如打包输出的多有资源（JS/CSS）
            template: './src/index.html'
        })
    ],
    mode: 'development'
}