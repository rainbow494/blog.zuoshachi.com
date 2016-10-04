# �������jquery-free ʵ��

�����ǿ�����һ����ʦ��[���������jquery-free��](http://www.ruanyifeng.com/blog/2013/05/jquery-free.html)һ�ĺ��ʵ��

## ѡȡDOMԪ��

> $('div');
```
var $ = document.querySelectorAll.bind(document);
$('#first')[0].style['background-color'] = 'red';
```

[���д���](https://jsfiddle.net/rainbow494/rac5jthw/2/)

## DOM����

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

[���д���](https://jsfiddle.net/rainbow494/7fynn3pq/2/)

## �¼��������¼�����

- �¼�����

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

- �¼�����

> $('#first').trigger('click');

���д�ıȽϸ��ӣ�������˼������Ԫ��������һ��trigger����������ʱ����һ��event������Ԫ�������ɷ�һ���¼�
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

[���д���](https://jsfiddle.net/rainbow494/67xLw1bh/3/)

## document.ready
���ʵ�����ǽ�JavaScript�ű��ļ�������ҳ��ײ�����

## attr

> $("#picture").attr("src", "http://url/to/image");

```
var $ = document.querySelector.bind(document);
$('#my-blog').src = "http://huangyue.link";
```

[���д���](https://jsfiddle.net/rainbow494/931zjxhw/)

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

[���д���](https://jsfiddle.net/rainbow494/v1c7e6j8/1/)

## css

> $('body').css('width: 300px');

```
var $ = document.querySelector.bind(document);

$('#first').style.width = '200px';
$('#first').style.height = '200px';
$('#first').style.cssText += 'background-color: green';
```

[���д���](https://jsfiddle.net/rainbow494/hwkdo9gL/1/)

## ���ݴ洢

> $("body").data("foo", 52);

```
var user = {name:'huangyue'};
document.querySelector('div').dataset.user = JSON.stringify(user);
alert(document.querySelector('div').dataset.user);
```

[���д���](https://jsfiddle.net/rainbow494/dm2w3e2u/)

## Ajax

```
/*
����$.ajax({
��������type: "POST",
��������url: "some.php",
��������data: { name: "John", location: "Boston" }
����}).done(function( msg ) {
��������alert( "Data Saved: " + msg );
����});
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

����jsfiddler�İ�ȫ���ƣ����ﲻ�ṩ����ʵ��