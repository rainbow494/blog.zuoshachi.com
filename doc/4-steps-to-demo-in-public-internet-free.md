# 只需4步，利用笔记本免费在公网上做Demo - Ngrok学习笔记

> 最近在研究如何利用github的webhook将代码同步到本地，在过程当中有一步需要填写回调的ip地址。
> 看了github的官方教程[Configuring Your Server](https://developer.github.com/webhooks/configuring/)
> 其中特别推荐使用Ngrok，玩了一下，发现这货能快速把你的本机环境暴露到公网上，于是就在这里分享给大家


## Ngrok是什么？

> ngrok 是一个反向代理，通过在公共的端点和本地运行的 Web 服务器之间建立一个安全的通道。ngrok 可捕获和分析所有通道上的流量，便于后期分析和重放


## 为什么要使用Ngrok？

> 作为一个Web开发者，我们有时候会需要临时地将一个本地的Web网站部署到外网，以供它人体验评价或协助调试等等，通常我们会这么做：
找到一台运行于外网的Web服务器
服务器上有网站所需要的环境，否则自行搭建
将网站部署到服务器上
调试结束后，再将网站从服务器上删除
只不过是想向朋友展示一下网站而已，要不要这么麻烦，累感不爱

## Ngrok 使用步骤

1. [下载](https://ngrok.com/download)

2. 注册账户并打开Dashboad，点击Get Started

3. 安装token
按照Dashboad上的提示利用ngrok安装token
```
ngrok authtoken xxx-yyyyy-zzzzz
```

4. 暴露你的本机环境
```
ngrok http 3000
```
然后为弹出一个cmd，在里面找到forwarding，通过forwarding后的地址 ```http://xxxxx.ngrok.io``` 就能访问你的本机环境了

## 测试
> 假设你知道nodejs和expressjs的基本用法，不知bing知，网上有很多相关资料

1. 按照[这个页面](https://www.npmjs.com/package/express)利用Express建立http监听环境
2. 在浏览器中输入forwarding ```http://xxxxx.ngrok.io```

## 参考资料
- [Ngrok简介](http://baike.baidu.com/view/13085941.htm)
- [Ngrok官网](https://dashboard.ngrok.com)
