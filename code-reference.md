# 模块参考手册

## 前端

#### SPA URL Router
- 实现工具 [Sammy.js](http://www.sammyjs.org/)

- 快速入门
	1. 初始化路由器
	```
	var app = $.sammy(function(){
		// 路由配置。。。
	});

	// 运行路由
	app.run('#/');
	```

	1. 匹配路由，执行指定代码
	```
	this.get("#/:page", function(context)
	{
		// do somthing
	});
	```

	1. 正则表达式验证当前路由
	```
	if (!(/#\/\d+/.test($.sammy().getLocation())))
		// do somthing
	```

	1. 修改当前路由, 发起新路由请求, 完成后继续执行当前函数
	```
	$.sammy().setLocation('#/');
	```

- 完整案例
	- [下载地址](https://github.com/rainbow494/code-reference/tree/master/examples/url-route/sammy)
	- 运行方式： 通过IIS发布案例

#### CSS框架
- 布局工具:
	1. Bootstrap
		- [教程](http://v3.bootcss.com/)
	2. Flex
		- [语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
		- [实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

- _(Draft)预编译_:
 	1. LESS
		- [教程](https://www.ibm.com/developerworks/cn/web/1207_zhaoch_lesscss/)
		- 最佳实践
			1. 调试方法
				- 追加min-map的方法
				- min-map是什么，min-map的实现，阮一峰
			2. 组装
			3. 控件的写法
		- 完整案例
			1. 下载
			2. 运行方式
- 自适应
	1. media-query (http://blog.dimpurr.com/css-media/)

#### _(Draft)模块间通信  / Modal Communicate_
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

#### _(Draft)数据模型_


#### _(Draft)面向对象_

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

### 非对应字段表单列检索

重写原reporsitory中的queryable方法
```
public override IQueryable<TDomainEntity2> CreateQueryable<TDomainEntity2>(int databaseId)
```
