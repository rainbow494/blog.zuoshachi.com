# 15分钟搞定真机调试环境

## 前提
- 本文假定读者已经安装了nodejs开发环境，并能使用npm安装包
- 读者应该至少知道如何查询本机ip
- 构建环境前请先关闭防火墙（简单粗暴的降低环境复杂度）

## 构建调试环境
- [下载代码](https://github.com/rainbow494/blog.zuoshachi.com/blob/master/examples/15-minutes-to-build-environment-for-remote-debug-css-and-js-on-mobile-device)
- 进入目录，执行```npm install```
- 执行```npm start```，启动测试站点
- 在浏览器中输入```localhost:3000```，确认站点成功启动

## 利用weinre调试css, html
- 安装 / 启动weinre
    - 参照[Weinre --WebApp 调试工具](https://gaohaoyang.github.io/2015/06/18/weinre/)

- 在头部加入脚本
Weinre --WebApp 调试工具中写道
> 给目标页面添加一行脚本
> 可以看到 2.中的 Target Script 说要添加一行脚本到要调试的 web 页面中。

这句话是指，打开weinre页面，将js脚本copy至demo/public/index.html的<head>节点中

- 用手机打开页面即可进行调试

- 在element面板中可以直接调试元素

- 点击click按钮后可以看到console面板中出现新的信息

## 利用jsfiddler调试js
- 启动fiddler代理
    [使用Fiddler调试手机页面请求](http://ju.outofmemory.cn/entry/22854)

- 利用fiddler替换js文件
    - [如何利用fiddler调试线上代码](http://www.cnblogs.com/zichi/p/4989590.html)
    - 在find a file的步骤里选中我们的foo.js文件，并将'button clicked'改为'button clicked 2'
    - 刷新页面，点击click后查看结果

## 参考列表
- 更多fiddler的相关资料
    [Fiddler 高级用法：Fiddler Script 与 HTTP 断点调试](https://my.oschina.net/leejun2005/blog/399108)
    [Fiddler 教程](http://www.mikel.cn/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/%E8%BD%AC%E8%BD%BDfiddler-%E6%95%99%E7%A8%8B-%E5%B0%8F%E5%9D%A6%E5%85%8B-%E5%8D%9A%E5%AE%A2%E5%9B%AD.html)
    [Debugging JavaScript/CSS/HTML from a remote server in remote browser with Fiddler](http://ariatemplates.com/blog/2013/02/debugging-javascript-css-html-from-a-remote-server-in-remote-browser-with-fiddler/)
