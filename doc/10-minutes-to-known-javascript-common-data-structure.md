# 十分钟熟悉Javascript常用数据结构

## 本文目标
- 帮助刚接触js代码的C#程序员快速了解相关数据结构
- 本文只涉及了这些数据结构的构造方法，更多具体用法请参考阮一峰的[Javascript标准参考教程](http://javascript.ruanyifeng.com)
- 快速提升逼格的[Stack Overflow 高票javascript问题汇总](https://github.com/simongong/js-stackoverflow-highest-votes)

## 基本类型
#### int
Number类型
```
var numStr = "1";
var num = Number(numStr);
console.log(num);
```

#### floot
Number类型

#### bool
Boolean类型
```
var booleanStr = "1";
var boolean = Boolean(booleanStr);
console.log(boolean);
```

#### date
Date
```
var dateStr = "2016-9-24";
var date = Date(dateStr);
console.log(date);
```

#### string
String
```
var num = Number(1);
var string = String(num);
console.log(string);
```

## 引用类型
#### object
Object
```
var objA = new Object();
obj['a'] = 1;
obj.b = 2;
```

```
var objB = {
    a: 1,
    b: 2
}
```

Object <==> String
```
var objBStr = JSON.stringify(objB);
console.log(objBStr);
// "{"a":1,"b":2}"
var objC = JSON.prase(objBStr);
console.log(objC);
// Object {a: 1, b: 2}
```

#### function
function
```
var functionOne = function() {
    // Some code
};
```
```
function functionTwo() {
    // Some code
}
```
这两种方法的不同[JavaScript function declaration syntax: var fn = function() {} vs function fn() {}](http://stackoverflow.com/questions/336859/javascript-function-declaration-syntax-var-fn-function-vs-function-fn)

##集合类型
#### array
[], Array, Splice

```
var arrayA = [];

var arrayB = new Array();
```

伪数组: 有长度但添加新节点以后length值不会改变
```
var fakeArray = {
    0: 'value1',
    length: 1
}
```
伪数组转换成数组

```
Array.prototype.slice.call(fakeArray);
```

#### queue
Array + shift / unshift 函数

```
queue = [1, 2, 3];
queue.shift();
// 1
queue.shift();
// 2
console.log(queue);
// [3]

queue.unshift(4)
console.log(queue);
// [4, 3]
```
#### stack
Array + pop / push 函数

```
queue = [1, 2, 3];
queue.pop();
// 3
queue.pop();
// 2
console.log(queue);
// [1]

queue.push(4)
console.log(queue);
// [1, 4]
```

#### dictionary
构造

```
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
```

使用
```
console.log(Direction.Up)
// display 1
console.log(Direction[1])   
// display "Up"
```

## 第三方标准库（数据操作相关）
#### 数据操作
- [underscore](http://underscorejs.org/)
- [linq.js](http://linqjs.codeplex.com/)

#### 深拷贝
- [loadash](https://lodash.com/)

#### 日期型
- [moment.js](http://momentjs.com/)
