var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './server.js'),
    output: {
        path: path.join(__dirname, './dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};

// var path = require("path");
// var htmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');

// module.exports = {
//     entry:'./src/main.js'  ,
//     output: {
//         filename: 'bundle-[hash].js',
//         //path: path.resolve(__dirname, 'dist/assets'),
//         publicPath: "http://localhost:8080/"
//     },

//     plugins: [
//         new htmlWebpackPlugin({
//             template: './src/index.html',
//             title: 'feee'
//         }),
//         new webpack.HotModuleReplacementPlugin()
//     ],

//     devServer: {
//         historyApiFallback: true, //此项目中用于在地址栏直接输入地址跳转
//         hotOnly: true,
//         hot:true
//         //contentBase: path.join(__dirname, "bundle"),

//     },


//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 include: path.resolve(__dirname, "src/"),
//                 exclude: path.resolve(__dirname, "node_modules"),
//                 use: [{
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["env", "react", "stage-1"],// stage-1 包含了stage-2和stage-3  当然0包含了1，2，3
//                         plugins: [['import', { libraryName: 'antd', style: 'css' }]]
//                     }
//                 }]
//             }, {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']  //解析是从左到右
//             }, {
//                 test: /\.scss$/,
//                 use: ['style-loader', 'css-loader', {
//                     loader: 'postcss-loader',
//                     options: {
//                         plugins: function () { return [require('autoprefixer')] }
//                     }
//                 }, 'sass-loader']
//             }, {
//                 test: /\.png$/i,
//                 use: ['file-loader']
//             }
//         ]
//     }
// }