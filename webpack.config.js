const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'a.js'),
    output: {
        filename: 'bundle-[hash].js',
        //path: path.resolve(__dirname, 'dist/assets'),
        /**
         * @desc 在不是根路由的情况下刷新页面，可能会不能获取到打包的js文件，这时就要配置publicPath 
         */
        publicPath: "a/"
    },

    mode: 'production',

    /**
     * @des 生成标记源码位置的 .map 文件，方便开发时调试 
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