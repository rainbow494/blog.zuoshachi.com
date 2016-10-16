# 数据结构
- 需要考虑的问题
    - 可用操作（CRUD）
    - 速度（CRUD）
    - 空间（内存）

## 集合类型
- 数组
    - Array / ArrayList / List<>

- 链表
    - LinkedList<> 
    [linked, arraylist区别](http://www.importnew.com/6629.html)
    [list, linkedlist区别](http://blog.csdn.net/kong357385142/article/details/6394317)

- 字典
    - 提供了自定义索引的功能（而非array，索引自增）
    - 有嵌套结构
    - 字典，列表转换
    ```
    List<[same type as index]>
    List<string> keyList = new List<string>(myDictionary.Keys);
    for (int i = 0; i < keyList.Count; i++)
    {
        int myInt = myDictionary[keyList[i]];
    }
    ```
-  Hashtable 哈希表
    -  与字典的区别，哈希表items被加入数据集的位置不确定

- HashSet
    - 与hashtable的区别，重复值不会被加入HashSet

- Stack
- Queue

## 泛型

[msdn泛型教程](https://msdn.microsoft.com/zh-cn/library/512aeb7t.aspx)

- 泛型的目标
    - 尽可能的复用算法
    - 减少装箱，拆箱操作
    
- 泛型类
    - 开放不可被非开放继承（node: base<T> 编译失败）
    - 泛型类可作为参数
    
- 泛型接口
    - 通过定义泛型接口通用化算法

## 委托

## 反射


## lambada表达式
- 数据结构操作

## ADO.Net

## 

## 参考文章
http://www.cnblogs.com/Langzi127/archive/2010/07/29/1787716.html
http://www.cnblogs.com/walkingp/archive/2010/04/25/1720823.html
