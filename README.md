[toc]

# webpack-pure

> 学习与实践webpack

## webpack  
安装 `webpack` `webpack-dev-server`; 若遇到提示安装 `webpack-cli` 安装即可

安装完成后配置package.json
```
"scripts": {
    "dev": "webpack-dev-server"
}
```

默认入口 `./src/index.js`

---

在不是根路由的情况下刷新页面，可能会不能获取到打包的js文件，这时就要配置publicPath

---
使用html-webpack-plugin 插件时获取参数只能用 htmlWebpackPlugin  

---
**热更新** 

热更新的处理逻辑webpack已经封装好了，只要在应用的入口文件中添加以下代码  
```javascript
if (module.hot) {  
  module.hot.accept();
}
```

**vue-cli 脚手架打包出来的文字图标不显示**

修改webpack.base.conf.js 的
```js
{
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 100000, // 这里的值改大一点
    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
  }
}
```

## 其它

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


