/**
 * 获取process.env.NODE_ENV
*/
(function () {
    document.getElementById('app').innerHTML = '当前环境：' + process.env.NODE_ENV;
})();

/**
 * @des 定义的常量可以直接使用
 * config中的DefinePlugin
 */
(function() {
    const ele = document.createElement('h3');
    ele.innerHTML = '全局常量：' + AUTHER;
    document.querySelector('#app').parentNode.appendChild(ele); 
})()
