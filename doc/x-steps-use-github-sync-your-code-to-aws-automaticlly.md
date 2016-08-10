# 只需x步，利用github webhook自动同步代码到服务器

Creating a webhook is a two-step process. 
You'll first need to set up how you want your webhook to behave through GitHub--what events should it listen to. 
After that, you'll set up your server to receive and manage the payload.


To set up a repository webhook on GitHub, head over to the Settings page of your repository, and click on Webhooks & services. After that, click on Add webhook.

Payload URL
http://localhost:4567

Configuring Your Server

接受来自github的post消息


3. [利用Ngrok在公网下暴露你的本机环境](https://github.com/rainbow494/blog.zuoshachi.com/blob/master/doc/4-steps-to-demo-in-public-internet-free.md)

## Testing Webhooks


## 利用Nodejs + Expressjs + Git 自动同步代码
https://www.npmjs.com/package/github

## 其他
注意为要被使用的文件夹和脚本给出足够的权限

## 参考资料
https://developer.github.com/webhooks/creating/


http://www.07net01.com/2016/05/1529599.html
http://ju.outofmemory.cn/entry/260385
https://xulog.com/2015/01/23/demo-of-automatically-update-gitbook-by-git-webhook.html