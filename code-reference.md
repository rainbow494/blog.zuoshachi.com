#模块参考手册
## 前端

### SPA URL Router
- 实现工具：[Sammy.js](http://www.sammyjs.org/)
- 快速入门：
	- 初始化路由器
	```
	var app = $.sammy(function(){
		// 路由配置。。。
	});

	// 运行路由
	app.run('#/');
	```

	- 路由配置
	- 匹配路由，执行指定代码
	```
	this.get("#/:page", function(context)
	{
		// do somthing
	});
	```

	- 正则表达式验证当前路由
	```
	if (!(/#\/\d+/.test($.sammy().getLocation())))
		// do somthing
	```

	- 修改当前路由, 发起新路由请求, 完成后继续执行当前函数
	```
	$.sammy().setLocation('#/');
	```

- 完整案例
	- [下载地址](https://github.com/rainbow494/code-reference/tree/master/examples/url-route/sammy)
	- 运行方式： 通过IIS发布案例


----
## 后端


