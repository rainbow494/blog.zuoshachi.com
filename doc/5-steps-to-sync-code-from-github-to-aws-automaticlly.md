# 只需5步，自动同步github代码到amazon服务器

最近实现了个小功能，自动同步github代码到amazon服务器
工作流如下
    1.推送数据到github
    2.webhook发送消息到指定webapi(url)地址
    3.webapi发送请求，从github上下载代码

起因是，家里老板把两年前辞职旅行的经历陆续发表到了微信订阅号(mdreamj)上，但订阅号没有域名绑定功能，所以只好写个静态主页host在aws上(fiona.link)，同时顺带把内容到了[github](https://github.com/rainbow494/fiona.link) 上

整个实现过程可以分为下面5步

## 1. 在github上建立webhook
Creating a webhook is a two-step process. 
You'll first need to set up how you want your webhook to behave through GitHub--what events should it listen to. 
After that, you'll set up your server to receive and manage the payload.


To set up a repository webhook on GitHub, head over to the Settings page of your repository, and click on Webhooks & services. After that, click on Add webhook.

Payload URL
http://localhost:4567

Configuring Your Server

接受来自github的post消息

## 2. 利用express建立监听服务

## 3. 在本地测试webhook
- [利用Ngrok在公网下暴露你的本机环境](https://github.com/rainbow494/blog.zuoshachi.com/blob/master/doc/4-steps-to-demo-in-public-internet-free.md)

## 4. 利用express执行脚本，下载github代码

## 5. 在amazon服务执行服务
- 利用pm2 host expressjs服务
- 注意为要被使用的文件夹和脚本给出足够的权限


## 实现代码
- [github-sync-helper实现](https://github.com/rainbow494/github-sync-helper)

## 参考资料
https://developer.github.com/webhooks/creating/