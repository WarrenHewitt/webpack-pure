const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');


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
    console.log(JSON.stringify(argv));
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
         * 1. 当模式设置为 production时会自动压缩和混淆, development不会
         * 2. 还有一种使用方式为在命令中： webpack --mode=development
         * 3. 设置不同模式时，会更改对应的 process.env.NODE_ENV 的值
         */
        mode: 'development',

        plugins: [
            new htmlWebpackPlugin({
                template: path.join(__dirname, '../public', 'index.html'),
                /**
                 * @desc 在html模板中调用参数 <%= htmlWebpackPlugin.options.title %>
                 */
                title: 'title from hwp param',
                currentEnv: env.currentEnv
            }),
            new BundleAnalyzerPlugin({
                analyzerPort: 8801,
                analyzerMode: 'disabled',
                generateStatsFile: true
            }),
            /**
             * @des 创建全局常量
             */
            new webpack.DefinePlugin({
                AUTHER: JSON.stringify('hewitt')
            })
            // new webpack.HotModuleReplacementPlugin()
        ],

        /**
         * @des 生成标记源码位置的 .map 文件，方便开发时调试 ,none表示不生成.map
         */
        // devtool: 'inline-source-map',

        // plugins: [
        //     new htmlWebpackPlugin({
        //         template: path.join(__dirname, 'public', 'index.html'),
        //         /**
        //          * @desc 在html模板中调用参数 <%= htmlWebpackPlugin.options.title %>
        //          */
        //         title: 'title from hwp param'
        //     }),
        //     // new BundleAnalyzerPlugin({
        //     //     analyzerPort: 8801
        //     // })
        //     // new webpack.HotModuleReplacementPlugin()
        // ],

        // devServer: {
        //     port: 8800,
        //     /**
        //      * @desc 此项目中用于在地址栏直接输入地址跳转
        //      */
        //     historyApiFallback: true,
        //     hotOnly: true,
        //     hot:true
        //     //contentBase: path.join(__dirname, "bundle"),

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
            //     }, {
            //         test: /\.css$/,
            //         use: ['style-loader', 'css-loader']  //解析是从左到右
            //     }, {
            //         test: /\.scss$/,
            //         use: ['style-loader', 'css-loader', {
            //             loader: 'postcss-loader',
            //             options: {
            //                 plugins: function () { return [require('autoprefixer')] }
            //             }
            //         }, 'sass-loader']
            //     }, {
            //         test: /\.png$/i,
            //         use: ['file-loader']
            //     }
            // ]
        }
    }
}