---
title: javascript
author:
createTime: 2024/05/09 15:58:15
permalink: /article/asrvoiah/
---
# JavaScript

## 函数

### 定义函数

#### 函数声明
一个函数定义（也称为函数声明，或函数语句）由 function 关键字，并跟随以下部分组成：

- 函数名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号括起来，{ /* … */ }。
```js
function square(number) {
  return number * number
}
```

#### 函数表达式
使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式，这是最常见的函数表达式语法形式。
```js
const square = function (number) {
  return number * number
}
```

#### 匿名函数
使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等。
```js
function (number) {
  return number * number
}
```

### 调用函数

#### 函数提升
JavaScript 解释器会将整个函数声明提升到当前作用域的顶部。
```js
// 所有函数声明实际上都位于作用域的顶部
function square(n) {
  return n * n;
}
console.log(square(5)); // 25
```

函数提升仅适用于函数声明，而不适用于函数表达式。以下代码无法运行：
```js
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Proxy
:::danger 问题
什么是 **Proxy**？

**MDN** 解释道：“**Proxy 对象** 用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。”
我们都知道，js中一切皆对象。那么什么是对象呢？对象的代理又是什么呢？
:::

根据 `ECMAScript` 规范，对象可分为两种对象，`常规对象(ordinary object)` 和 `异质对象(exotic object)`， **任何不属于常规对象的对象都是异质对象**。规范指出，

满足以下条件的就是 **常规对象**：内部方法都是由 `table 1` 和 `table 2` 中规范实现的。

- **table1:**

![Alt text](/images/language/js-object-table1.png "table1: Essential Internal Methods")
>举个例子，例如 **Obj.foo**，引擎内部会调用`[[Get]]`内部方法读取属性值。

- **table2:**

![Alt text](/images/language/js-object-table2.png "table2: Additional Essential Internal Methods of Function Objects")

**一个对象必须部署 `table 1` 这 11 个内部方法，一个对象如果被作为函数调用时，就会自动部署 `table 2` 这两个方法。**

当我们查阅 `ECMAScript` 对 `Proxy` 的定义后，我们发现：

虽然`Proxy` 内部实现的方法和`table 1` ，`table 2`中的方法一样，但是行为确是不同的。引擎内部会调用部署到代理对象中的`[[Get]]`内部方法读取属性值，虽然会部署相同的内部方法，但是当创建代理对象的时候没有指定的对应拦截函数，就会调用原始对象的`[[Get]]`方法。从`[[Get]]`就可以看出，**`Proxy`是一个异质对象，因为并没有按照 `table 1` 中的规范来。** 

![Alt text](/images/language/js-object-table-proxy.png "Proxy Handler Methods")