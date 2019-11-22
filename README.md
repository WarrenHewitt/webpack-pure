[toc]

# webpack

> 学习与实践webpack

## 安装  
`npm install webpack webpack-dev-server`  

若遇到提示安装 `webpack-cli` , 安装即可, 因为现在是将命令抽离

[文档](https://webpack.js.org/guides/getting-started/#basic-setup)


## 打包操作

- 配置package.json脚本
```
"scripts": {
  "build": "webpack"
}
```

- 当配置文件不叫webpack.config.js 或不在根路径  可以用 --config ./some path 实现

- 如果直接在命令行中执行打包命令，会提示: `webpack: command not found` 所以放到`package.json`文件中执行


## 启动本地开发 webpack-dev-server
配置package.json脚本
```
"scripts": {
  "dev": "webpack-dev-server --progress"
}
```
- process 命令显示进度
- 没有添加配置文件时，默认入口 `./src/index.js`
- 会自动将打包后的文件引入html文件中

---

**热更新** 

热更新的处理逻辑webpack已经封装好了，只要在应用的入口文件中添加以下代码  
```javascript
if (module.hot) {  
  module.hot.accept();
}
```

---

## 配置

- 部分配置说明见 `./config/webpack.config.js`

```
{
  generateStatsFile: 默认false，打开后在webpack打包的同时就会创建stats.json然后打开浏览器查看结果
}
```

---

- 使用cdn引入的模块

两种方式防止eslint报错： 1.在eslint配置文件中配置全局变量；2.使用如下的externals配置

---

若想重命名 cdn 导出的模块名称  即用到了 `import anyName from 'importName'`,就需要配置如下

(externals 主要作用是 防止 import 的包，打包到 bundle 中)

```js
externals: {
    importName: 'cdnExportName'
    /*
    * 1. importName： 在文件中要引用时所用 import anyName from 'importName'
    * 2. cdnExportName: 引入的cdn导出的模块名称，如高德的AMap等
    * 3. 常规做法是将两个值设为一致
    */
}
```


### 插件

- htmlWebpackPlugin

使用html-webpack-plugin 插件时获取参数只能用 htmlWebpackPlugin  

- BundleAnalyzerPlugin

分析打包结果：

1. 先在插件中配置(查看webpack.config.js)

2. 生成 `webpack --profile --json > ./analyze/stats.json` 文件

3. 执行 `webpack-bundle-analyzer ./analyze/stats.json` 分析


### webpack-chain

- 当项目的配置需要根据不同情况动态生成的时候

- https://github.com/neutrinojs/webpack-chain

```js
const path = require('path');
const Config = require('webpack-chain');

const config = new Config();

config
  // 这里的index 会替换filename中的name 
  .entry('index')
    .add(path.resolve(__dirname, './src/main.js'))
    .end()
  .output
    .path(path.resolve(__dirname, './dist'))
    .filename('[name].bundle.js');

config
  .mode('production');

module.exports = config.toConfig();

```

### 简单的多页面打包
目录说明
```
|--morePage
   |-- page1.html
   |-- page2.html
   |-- page1.js
   |-- page2.js
```

```js
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
```


---

# 其它

- Yeoman  
npm install yo  
生成项目文件，代码结构，自动将最佳实践和工具整合进来  
yo --version 

- bower
npm install bower    
web网站组成：框架，库，公共部分，  
bower用来跟踪管理   
bower install jquery

- grunt  
npm install grunt-cli(command-line interface)  
自动化，压缩，编译，单元测试，代码1（）.校验  


# gulp


