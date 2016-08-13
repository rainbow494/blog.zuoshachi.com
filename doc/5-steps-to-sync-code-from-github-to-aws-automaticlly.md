# 只需5步，自动同步github代码到aws服务器

最近研究了一把如何将github代码自动同步到aws上。
 
起因是老婆将辞职旅行时的游记陆续发到了微信订阅号上，但订阅号不能绑定域名，因此需要一个静态主页展示订阅号上链接，同时也需要一个地方备份页面，因此选用了github备份文件，aws host页面这样的部署形式

经过一番努力，最终，游记发布流程如下

1. 本地更新游记，推送到github上
2. github的webhook服务发送post请求到指定url地址（aws主机地址）
3. express服务处理请求，调用git脚本，从github上下载游记

## 整个实现过程可以分为以下5步

1. 配置webhook服务
2. 利用express建立监听服务
3. 在本地测试webhook
4. 利用express执行脚本，下载github代码
5. 在amazon服务执行服务

另外，本文假定读者了解nodejs，expressjs，node-debug，github，curl，git，pm2，linux命令

## 配置webhook服务

- 进入github网站，打开  代码库(repository) > setting选项卡 > webhook & services选项卡
- 在webhook & services选项卡下，点击Add webhook按钮
- 按下文[利用Ngrok在公网下暴露你的本机环境](https://github.com/rainbow494/blog.zuoshachi.com/blob/master/doc/4-steps-to-demo-in-public-internet-free.md)将免费域名指向自己的主机
- 在payload下填入响应接受请求的webhook域名(即上一步中的ngrok域名，http://xxxx.ngrok.io)


## 利用express建立监听服务

- 利用下面代码启动expressjs服务
```
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/', function (req, res) {
  res.send('get webhook request')
});

app.listen(3000)
```

- 在浏览器中输入```http://localhost:3000```确认服务已经启动

## 在本地测试webhook服务

- 修改github上的代码
- 打开webhook & services选项卡，查看Recent Deliveries面板（如果没看到Recent Deliveries面板，请点击Edit按钮）
- 在Recent Deliveries面板下点击最近一条webhook request后面的省略号，确认请求是否成功
- 查看express服务，确认控制台上是否显示```get webhook request```

## 利用express执行脚本，下载github代码

- 编写git脚本并测试
- sync-blog.bat （windows）
```
git -C f:\github\fiona.link pull
```
- sync-blog.sh（linux）
```
git -C /home/ubuntu/fiona/fiona.link pull
```

- 利用expressjs执行git脚本
```
var exec = require('child_process').exec;

app.post('/', function (req, res) {
    res.send('get webhook request')

    var child = null;
    child = exec('./sync-fiona-blog.bat');
    // child = exec('./sync-fiona-blog.sh');  // 服务部署在linux上后请调用该脚本
    
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    
    child.stderr.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
});
```

- 重启expressjs服务，在github网站上修改代码，测试expressjs是否响应求并利用git脚本将代码下载到本地

## 5. 在amazon服务执行服务
- 修改github webhook下的payload地址
- 复制git脚本到aws，并赋予执行权限（例如把脚本的权限设置为777）
- 利用pm2 host expressjs服务
- 修改github代码，确认代码是否被pull到aws上

## 实现代码
- [github-sync-helper实现](https://github.com/rainbow494/github-sync-helper)

## 参考资料
- [Creating Webhooks](https://developer.github.com/webhooks/creating/)
- [Webhook Guide](https://developer.github.com/webhooks/)