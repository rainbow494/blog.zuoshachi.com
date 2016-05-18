# 如何调试一个网站
- 公司内培

## 小型网站架构图
 ![](https://github.com/rainbow494/code-reference/blob/master/img/architectural.png)

## 模块、系统 / 运行环境 / 第三方插件？

- 模块、系统
	- 前台
	- 后台
	- 数据库
	- gps数据库
	- map数据库
	- ci

- 运行环境
	- chrome
	- .net
	- sql server
	- sql lite
	- nodejs
	
- 第三方插件
	- kendoui
	- knockoutjs

## 调试工具 / 使用方法 / 文档？

- chrome
	- elementes
		- css (2 filters)
		- dom 
		- event listner / dom break point
		- responsive
	- console
		- profiler
		- log request
	- source
		- pause on exception (first exception?)
		- black box
		- format
		- edit
		- mapping project???????
	- network
		- bottle neck
	- source-map
		- [原理](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
	- resources
	- others

- .net
	- postman ?? demo
	- apiUtility64
	- vs

- sql server
	- sql server profiler
	- sql management

- sql lite
	- [sqllite](http://www.oschina.net/news/43608/5-popular-and-free-sqlite-management-tools)
	
- nodejs
	- executor grunt
	- node-inspector

- kendoui
	- chrome-extension： kendo ui 
- knockoutjs
	- chrome-extension： knockoutjs context debugger

## 问题定位
- 持久化数据
	- local storage
	- net work log / xml http request log
	- kendo UI extenstion
	- knoutoutjs extenstion
	- database

- 系统配置
	- sql lite
		```
		- dataSourceSpatial
		地图调试入口
		- special convert
		Con = new SQLiteConnection(@"URI=file:" + SpatialPath);
		- geo region connection
		```
		
	- gps 数据库mapping
		```
		acs.vehicle.name => gps.vehicle.id
		acs.vehicle.gpsid => gps.vehicle.ExternalID
		TFGPS.INI 
		```
	
	- orm mapping
		> 2 PersistenceInfoProvider.cs files acs/extension
	

- 系统定位

- 美国测试环境
	- viewfinder buildagent

- 构建快速迭代环境 / 技巧
	- 前端环境

	- kendo UI 环境

	- webapi环境

	- 数据库环境

	- CI环境
	
	- 其它
		- regex
		- json
		
	- git	
		- 回退代码
	
## 性能调试
	- 工具 / 技巧
	
## 实例

