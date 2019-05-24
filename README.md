[toc]

# webpack

> 学习与实践webpack

## 安装  
`npm install webpack webpack-dev-server`  

若遇到提示安装 `webpack-cli` , 安装即可

## 打包操作

配置package.json脚本
```
"scripts": {
  "build": "webpack"
}
```
当配置文件不叫webpack.config.js 或不在根路径  可以用 --config ./some path 实现

如果直接在命令行中执行该命令，会提示: webpack: command not found 所以放到该文件中执行


## 启动本地开发
配置package.json脚本
```
"scripts": {
  "dev": "webpack-dev-server"
}
```

- 没有添加配置文件时，默认入口 `./src/index.js`

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

- 部分配置说明见 `webpack.config.js`

---

- 模块外部化 

使用cdn引入的模块，防止eslint报错等

```js
externals: {
    importName: 'cdnExportName'
    // importName： 在文件中要引用时所用 import anyName from 'importName'
    // cdnExportName: 引入的cdn导出的模块名称，如高德的AMap等
}
```


### 插件

**htmlWebpackPlugin :**

使用html-webpack-plugin 插件时获取参数只能用 htmlWebpackPlugin  

**BundleAnalyzerPlugin :**

分析打包结果
```
{
  generateStatsFile: 默认false，打开后在webpack打包的同时就会创建stats.json然后打开浏览器查看结果
}
```


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


