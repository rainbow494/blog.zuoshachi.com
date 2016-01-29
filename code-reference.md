#Transfinder 模块扩展
## Front End

### Single Page Application URL Router

- 类库：[Sammy.js](http://www.sammyjs.org/)
- 功能：
	- 收到符合条件的参数，跳转到指定页面
	- 收到不符合条件的参数，跳转到默认页面

- 用例
``
var app = $.sammy(function()
{
	this.get("#/", function(context)
	{
		tf.pageManager.redirectToDefaultPage();
	});
	this.get("#/:page", function(context)
	{
		tf.pageManager.changePage(this.params.page);
	});
}).run("#/" + route);

- 完整案例



----
## Back End


