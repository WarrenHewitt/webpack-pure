const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * @des 其它说明查阅 README
 */

/**
 * @des 返回一个函数，参考：https://webpack.js.org/configuration/configuration-types/#exporting-a-function
 * 启动：webpack-dev-server --config ./config/webpack.config.js --env.currentEnv=devvv
 * 1. env：启动webpack时传入的参数；如上启动，返回 { currentEnv: devvv }
 * 2. argv：启动webpack时通过命令行传入的参数；如上启动，返回值如下：
 * { 
        "_": [],"cache": null,"bail": null, "profile": null, "serveIndex": true, "serve-index": true, "inline": true, 
        "color": { "level": 2,"hasBasic": true, "has256": true, "has16m": false }, 
        "colors": { "level": 2, "hasBasic": true, "has256": true, "has16m": false }, "info": true, 
        "config": "./config/webpack.config.js", "env": { "currentEnv": "devvv" }, 
        "client-log-level": "info", "clientLogLevel": "info", "host": "localhost", 
        "$0": "node_modules\\webpack-dev-server\\bin\\webpack-dev-server.js" 
    }
 */
module.exports = (env, argv) => {
    return {
        /**
         * @des 入口文件
         */
        entry: path.resolve(__dirname, '../src', 'index.js'),
        output: {
            filename: 'bundle-[hash].js',
            //path: path.resolve(__dirname, 'dist/assets'),
            path: path.join(__dirname, '../dist'),
        },

        /** 
         * 1. 当模式设置为 production 时会自动压缩和混淆, development不会
         * 2. 还有一种使用方式为在命令中： webpack --mode=development
         * 3. 设置不同模式时，会更改对应的 process.env.NODE_ENV 的值
         */
        mode: 'development',

        plugins: [
            new htmlWebpackPlugin({
                /** 模板地址 */
                template: path.join(__dirname, '../public', 'index.html'),
                /**
                 * @desc 在html模板中调用参数 <%= htmlWebpackPlugin.options.title %>
                 */
                title: 'title from hwp param',
                currentEnv: process.env.NODE_ENV === 'development' ? env.currentEnv : ''
            }),
            /**
             * @des 分析打包结果
             */
            new BundleAnalyzerPlugin({
                analyzerPort: 8801,
                /** @des server(运行server时就执行) disabled(一般采取这种方式，运行单独命令读取stats.json才启动分析服务)  */
                analyzerMode: 'disabled',
                generateStatsFile: true
            }),
            /**
             * @des 创建全局常量
             */
            new webpack.DefinePlugin({
                AUTHER: JSON.stringify('hewitt')
            }),

            // new webpack.HotModuleReplacementPlugin()

            /** gzip 参考 https://webpack.docschina.org/plugins/compression-webpack-plugin/ */
            // new CompressionPlugin(),

            /** 把css样式从js文件中提取到单独的css文件中（style-loader是将央视直接插入到html） */
            // new MiniCssExtractPlugin({
            //     filename: devMode ? '[name].css' : '[name].[hash].css',
            //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            // })
        ],

        /**
         * @des 生成标记源码位置的 .map 文件，方便开发时调试 ,none表示不生成.map
         */
        devtool: 'inline-source-map',


        /**
         * @des webpack-dev-server 相关配置
         */
        // devServer: {
        //     port: 8800,
        //     /** 此项目中用于在地址栏直接输入地址跳转 */
        //     historyApiFallback: true,
        //     hotOnly: true,
        //     hot:true
        //     //contentBase: path.join(__dirname, "bundle"),
        /** 开启 gzip 压缩 */
        //     compress: true
        /** 不输出打包信息 */
        //     quiet: true
        // },


        module: {
            // rules: [
            //     {
            //         test: /\.js$/,
            //         include: path.resolve(__dirname, "src/"),
            //         exclude: path.resolve(__dirname, "node_modules"),
            //         use: [{
            //             loader: "babel-loader",
            //             options: {
            //                 presets: ["env", "react", "stage-1"],// stage-1 包含了stage-2和stage-3  当然0包含了1，2，3
            //                 plugins: [['import', { libraryName: 'antd', style: 'css' }]]
            //             }
            //         }]
            //     }, 
            /** 参考 webpack sass-loader */
            //   {
            //     test: /\.s[ac]ss$/i,
            //     include: ''
            //     use: [
                    // loader: devMode ? 'style-loader': MiniCssExtractPlugin.loader
            //       /** 调用打包到js中的css时，创建 style 标签插入 html，不是创建文件然后引入 */
            //       'style-loader',
            //       /** 在js代码中使用import和require来导入css文件，如果css文件中包含@import和url()这两个语句就需要css-loader来处理 */
            //       'css-loader',
                    // {
                        // compiles Sass to CSS
                    //     loader: 'sass-loader',
                    //     options: {
                    //         // Prefer `dart-sass`
                    //         implementation: require('sass'),
                    //     },
                    // },
            //     ],
            //   }
            // ]
        }
    }
}