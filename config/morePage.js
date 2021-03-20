const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return {
        entry: {
            page1: path.join(__dirname, '../morePage/page1.js'),
            page2: path.join(__dirname, '../morePage/page2.js'),
        },
        output: {
            filename: 'bundle-[name].js',
            path: path.join(__dirname, '../morePage/bundle'),
        },

        plugins: [
            new htmlWebpackPlugin({
                title: 'p1',
                /** 文件名必须 */
                filename: 'p1.html',
                /** chunk 名必须 */
                chunks: ['page1'],
                /** 模板必须 */
                template: path.join(__dirname, '../morePage', 'page1.html'),
            }),
            new htmlWebpackPlugin({
                title: 'p2',
                filename: 'p2.html',
                chunks: ['page2'],
                template: path.join(__dirname, '../morePage', 'page2.html'),
            })
        ]
    }
}