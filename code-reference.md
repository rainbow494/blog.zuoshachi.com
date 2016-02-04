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

### CSS框架
- 实现工具：[Bootstrap](http://v3.bootcss.com/)

### 模块间通信  / Modal Communicate
- PubSub：[PubSubJS](https://github.com/mroderick/PubSubJS)
- 优势：模块完全分离，不知道对方的存在
- 劣势：使用不规范容易造成内存泄漏
```
// subscribe
PubSub.subscribe(topicCombine(pb.DATA_CHANGE, "school"), this.dataChangeReceive);
PubSub.unsubscribe(this._dataChangeReceive);
PubSub.publish(topicCombine(pb.DATA_CHANGE, this.type, pb.EDIT), obEntityDataModel.id());
```

- Event:(this is basically a copy of slickgrid event)
- 劣势：高耦合
- 优势：消息不会暴露到全局范围
```
Demo

function component(){
	this.onChanged = new event();
};

component.prototype.change = function(){
	this.onChanged.notify();
}

component.prototype.dispose = function(){
	this.onChanged.unsubscribeAll();
}

var com = new component()
com.subscrible(callbackFun);

```

### 数据模型

### 面向对象
```
function BaseClass(arg){
	this._privateField;
	this.publicField;	
};

// private method:added prefix '_'
BaseClass.prototype._privateMethod = function(){
	// do something
}

// public method
BaseClass.prototype.method = function(){
	// do something	
}

// inherit
function SubClass(arg){
	BaseClass.call(this, arg);
};

SubClass.prototype = Object.create(BaseClass.prototype);
SubClass.prototype.constructor = SubClass;

// overwrite base method
SubClass.prototype.method = function(){
	// call base method
	BaseClass.prototype.method();
	// do other things
}

// create instance and call method
var sample = new SubClass();
sample.method()
```
	



----
## 后端


