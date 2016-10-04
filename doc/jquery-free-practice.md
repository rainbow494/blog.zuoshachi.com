# 如何做到jquery-free 实践

本文是看了阮一峰老师的[《如何做到jquery-free》](http://www.ruanyifeng.com/blog/2013/05/jquery-free.html)一文后的实践

## 选取DOM元素

> $('div');
```
var $ = document.querySelectorAll.bind(document);
$('#first')[0].style['background-color'] = 'red';
```

[运行代码](https://jsfiddle.net/rainbow494/rac5jthw/2/)

## DOM操作

> $(parent).append($(child));

```
var node1 = document.createElement('div');
$('#first').appendChild(node1);
```

> $(parent).prepend($(child));

```
var node2_1 = document.createElement('div');
node2_1.style['background-color'] = 'red';
var node2_2 = document.createElement('div');
node2_2.style['background-color'] = 'blue';

$('#second').appendChild(node2_1);
$('#second').insertBefore(node2_2, node2_1);
```

> $(child).remove()

```
var node3 = document.createElement('div');
$('#third').appendChild(node3);
// $('#third').removeChild(node3);
node3.parentNode.removeChild(node3);
```

[运行代码](https://jsfiddle.net/rainbow494/7fynn3pq/2/)

## 事件监听，事件触发

- 事件监听

> $('div').on('click', function() { ... };

```
Element.prototype.on = Element.prototype.addEventListener;

$('#first').on('click', function() {
	alert('first click');
})

NodeList.prototype.on = function(event, fn) {
	[]['forEach'].call(this, function(el) {
  	el.on(event, fn);
  });
  return this;
}

var group = document.querySelectorAll('.group');
group.on('click', function(){
	alert('group click');
});
```

- 事件触发

> $('#first').trigger('click');

这段写的比较复杂，大致意思就是在元素上新增一个trigger方法，调用时创建一个event，并向元素自身派发一个事件
```
Element.prototype.trigger = function(type, data) {
  var event = document.createEvent('HTMLEvents');
  event.initEvent(type, true, true);
  event.data = data || {};
  event.eventName = type;
  event.target = this;
  this.dispatchEvent(event);
  return this;
};

NodeList.prototype.trigger = function(event) {
  []['forEach'].call(this, function(el) {
    el['trigger'](event);
  });
  return this;
};

document.querySelectorAll('.group').trigger('click');
```

[运行代码](https://jsfiddle.net/rainbow494/67xLw1bh/3/)

## document.ready
最佳实践，是将JavaScript脚本文件都放在页面底部加载

## attr

> $("#picture").attr("src", "http://url/to/image");

```
var $ = document.querySelector.bind(document);
$('#my-blog').src = "http://huangyue.link";
```

[运行代码](https://jsfiddle.net/rainbow494/931zjxhw/)

## addClass

> $('body').addClass('hasJS');

```
var $ = document.querySelector.bind(document);

// $('#first').className = 'red';
$('#first').classList.add('red');
alert($('#first').classList.contains('red'));
$('#second').classList.remove('green');
$('#third').classList.toggle('blue');

```

[运行代码](https://jsfiddle.net/rainbow494/v1c7e6j8/1/)

## css

> $('body').css('width: 300px');

```
var $ = document.querySelector.bind(document);

$('#first').style.width = '200px';
$('#first').style.height = '200px';
$('#first').style.cssText += 'background-color: green';
```

[运行代码](https://jsfiddle.net/rainbow494/hwkdo9gL/1/)

## 数据存储

> $("body").data("foo", 52);

```
var user = {name:'huangyue'};
document.querySelector('div').dataset.user = JSON.stringify(user);
alert(document.querySelector('div').dataset.user);
```

[运行代码](https://jsfiddle.net/rainbow494/dm2w3e2u/)

## Ajax

```
/*
　　$.ajax({
　　　　type: "POST",
　　　　url: "some.php",
　　　　data: { name: "John", location: "Boston" }
　　}).done(function( msg ) {
　　　　alert( "Data Saved: " + msg );
　　});
*/
```

```
function request(type, url. opts, callback) {
    var xhr = new XMLHttpRequest();
    if (typeof opts === 'function') {
        callback = opts;
        opts = null;
    }
    
    xhr.open(type, url);
    
    var fd = new FormData();
    
    if (type === 'POST' && opts) {
        for (var key in opts) {
            fd.append(key, JSON.stringify(opts[key]));
        }
    }
    
    xhr.onload = function() {
        callback(JSON.parse(xhr.reponse));
    };
    
    xhr.send(opts ? fd : null);
}

var get = request.bind(this, 'GET');
get('http://huangyue.link', function(result) {
    alert(result);
});
```

由于jsfiddler的安全限制，这里不提供运行实例