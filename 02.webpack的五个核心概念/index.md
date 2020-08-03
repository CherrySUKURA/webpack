## webpack的五个核心概念
- Entry： 入口指示 Webpack以那个文件为入口起点开始打包，分析构建内部依赖图
- Output： 输出指示 Webpack打包后的资源bundles输出到哪里去，以及如何命名
- Loader： Loader让webpack能够去处理那些非javaScript文件（webpack自身只能理解javascript）
- Plugins：插件可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等
- Mode 模式指示 Webpack使用相应的模式的配置：有开发模式和生产模式