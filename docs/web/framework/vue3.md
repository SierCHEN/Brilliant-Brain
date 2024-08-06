---
title: vue3
author:
createTime: 2024/05/09 15:58:15
permalink: /article/w30gz4aj/
---
# VUE3

## 响应系统

:::tip 思考
在介绍响应式之前，我们先来思考一个问题，**什么是响应式？为什么需要响应式？**

**Vue**的官网这样解释道：“**Vue**能够**拦截**对响应式对象所有属性的**访问**和**修改**，以便进行**依赖追踪**和**触发更新**。”于是当某一数据（对象）具有响应式时，它的变化是可以**被检测到**，并**对这种变化做出响应机制**，比如通知依赖它的系统。这就是`数据响应式`。

这里我们先两个提出概念，`数据` 和 `工具`。你可以简单地把 `数据` 理解为**基本类型**，比如说字符串、数字等（是否可以认为，除字符串和数字之外的其他基本类型，都可以归为这两类，比如说布尔值，可以用数字0和1表示），而 `工具` ，可以理解为**对象**。所谓的 `响应式` ，其实就是利用 `工具` ，对 `数据` 进行监测，并将监测的结果通知依赖该数据的系统。`工具` 提供了这些方法，我们可以发现，**对象**就是如此，**对象**内部封装了[[Get]]、[[Set]]方法，向外部暴露了监听对象内部数据的方法，而我们真正所监听的，是对象内部的那些 `数据` ，例如obj.foo。

正因为如此，也解释了为什么Proxy是一个对象，它代理了一个对象，因为Proxy本质上，是一种 `工具` 。

:::

**vue2** 采用了`Object.defineProperty`来实现响应式数据，但是存在着一些缺陷，例如无法响应新增属性<Badge text="注1"/>、无法响应数组索引和length的变化<Badge text="注2"/>等。

> <small>注1：在Vue2中，只有在实例被创建时就存在的属性才会被观察。这意味着如果你在已经创建的实例上动态添加新的属性，Vue无法检测到这些属性的变化。为了解决这个问题，你需要使用Vue.set或Vue.$set方法来添加响应式属性。</small>

> <small>注2：Vue2无法检测到通过索引设置数组元素的变化，以及直接修改数组的length属性。因为尤雨溪用了重写数组的方法来实现数据的响应绑定。为了解决这个问题，你需要使用特定的数组方法，如push，pop，splice等，或者通过使用Vue.set方法来修改数组。</small>

**vue3**采用了`Proxy`来实现响应式。一个响应式系统的工作流程如下：
- 当 **读取** 操作发生时，将副作用函数收集到“桶”中
- 当 **设置** 操作发生时，从“桶”中取出副作用函数并执行

### “桶”的实现
我们用`WeakMap`、`Map`和`Set`构造了这个“桶”，其中`WeakMap`的键是原始对象 **target**，`WeakMap`的值是一个`Map`实例，而`Map`的键是原始对象 **target** 的 **key**，`Map`的值是一个由副作用函数组成的`Set`。

![An image](/images/framework/vue3-xiangyingshiyuanli1.jpg)

```js
const bucket = new WeakMap() // 定义“桶”

const obj = new Proxy(data,{
  // 拦截读取操作
  get(target,key){
    // 将副作用函数activeEffect添加到存储副作用函数的桶中
    tract(target,key)
    return target[key]
  },
  // 拦截设置操作
  set(target,key,newVal){
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    trigger(target,key)
  }
})

// 在get拦截函数内调用track函数追踪变化
function track(target,key){
  // 没有activeEffect，直接return
  if(!activeEffect) return
  let depsMap = bucket.get(target)
  if(!depsMap){
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if(!deps){
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

// 在set拦截函数内调用tirgger函数触发变化
function trigger(target,key){
  const depsMap = bucket.get(target)
  if(!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(fn => fn())
}
```
:::tip 提示
在这里需要解释一下，为什么我们要使用 **WeakMap**。

**WeakMap** 对`key`是弱引用，不影响垃圾回收器的工作。 据这个特性可知，一旦`key`被垃圾回收器回收，那么对应的键和值就访问不到了。所以**WeakMap** 经常用于存储那些只有当`key`所引用的对象存在时（没有被回收）才有价值的信息，例如上面的场景中，如果`target`对象没有任何引用了，说明用户侧不再需要它了，这时垃圾回收器会完成回收任务。

但如果使用 **Map** 来代替 **WeakMap**，那么即使用户侧的代码对`target`没有任何引用，这个`target`也不会被回收，最有可能导致内存溢出。
:::

### 副作用函数的注册机制
- 首先，定义了一个全局变量`activeEffect`，初始值是`undefined`，它的作用是存储被注册的副作用函数。
- 接着重新定义了一个`effect`函数，它变成了一个用来注册副作用函数的函数，`effect`函数接收一个参数`fn`，即要注册的副作用函数。
```js
// 用一个全局变量存储被注册的副作用函数
let activeEffect

// effect函数用于注册副作用函数
function effect(fn){
  // 当调用effect注册副作用函数时，将副作用函数fn赋值给activeEffect
  activeEffect = fn
  // 执行副作用函数，触发读取
  fn()
}
```

### 使用
```js
// 原始数据
const data = { text:'text hello' }

effect(
  // 一个匿名的副作用函数
  ()={
    doucment.body.innerText = obj.text
  }
)
//1秒后修改响应式数据，触发修改
setTimeout(()=>{
  obj.text = 'hello vue3'
},1000)
```

### 扩展与完善
> to be continued
`分支切换`、`cleanup`、`嵌套effect与effect栈`、`避免无限递归循环`

### 调度执行
**可调度性是响应式系统非常重要的特性。** 所谓可调度，是指当trigger动作触发副作用函数重新执行时，有能力决定副作用函数执行的时机、次数以及方式。

来看一下设计思路：

1. 为effect函数设计一个选项参数options，允许用户指定调度器，同时在effect函数内部我们需要把options选项挂载到对应的副作用函数上。
```js
export function effect(fn, options = {}) {
  // ...
  // 将 options 挂载到 effectFn 上
  effectFn.options = options; // 新增
  // effectFn.deps 用来存储所有与该副作用函数相关联的依赖集合
  effectFn.deps = [];
  // 执行副作用函数
  effectFn();
}
```
2. 有了调度函数，我们在trigger函数中触发副作用函数重新执行时，就可以直接调用用户传递的调度器函数，从而把控制权交给用户。
```js
function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);

  const effectsToRun = new Set();
  effects && effects.forEach(effectFn => {
    // 如果 trigger 触发执行的副作用函数与当前正在执行的副作用函数相同，则不触发执行
    if (effectFn !== activeEffect) { 
      effectsToRun.add(effectFn);
    }
  });
  effectsToRun.forEach(effectFn => {
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      effectFn()
    }
  });
}
```

让我们来看一个具体的例子：**控制副作用函数的执行次数。**
```js
const data = { foo: 1 }
const obj = new Proxy(data, { /* ... */ })

effect(() => {
  console.log(obj.foo)
})

obj.foo++
obj.foo++ 
```
在没有指定调度器的情况下，它的输出如下：
```js
1
2
3
```
如果我们不关心它的过渡状态，只关心最终结果，那么中间的打印值是我们所不希望看到的：
```js
1 // [!code focus]
2
3 // [!code focus]
```
```js
// 定义一个任务队列
const jobQueue = new Set()
// 使用 Promise.resolve() 创建一个 promise 实例，我们用它将一个任务添加到微任务队列
const p = Promise.resolve()

// 一个标志代表是否正在刷新队列
let isFlushing = false
function flushJob() {
  // 如果队列正在刷新，则什么都不做
  if (isFlushing) return
  // 设置为 true，代表正在刷新
  isFlushing = true
  // 在微任务队列中刷新 jobQueue 队列
  p.then(() => {
    jobQueue.forEach(job => job())
  }).finally(() => {
    // 结束后重置 isFlushing
    isFlushing = false
  })
}

effect(() => {
  console.log(obj.foo)
}, {
  scheduler(fn) {
    // 每次调度时，将副作用函数添加到 jobQueue 队列中
    jobQueue.add(fn)
    // 调用 flushJob 刷新队列
    flushJob()
  }
})

obj.foo++
obj.foo++
```

## 响应式方案

### Proxy
:::danger 问题
什么是 **Proxy**？

**MDN** 解释道：“**Proxy 对象** 用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。”
我们都知道，js中一切皆对象。那么什么是对象呢？对象的代理又是什么呢？
:::

根据 `ECMAScript` 规范，对象可分为两种对象，`常规对象(ordinary object)` 和 `异质对象(exotic object)`， **任何不属于常规对象的对象都是异质对象**。规范指出，

满足以下条件的就是 **常规对象**：内部方法都是由 `table 1` 和 `table 2` 中规范实现的。

- **table1:**

![Alt text](/images/framework/vue3-object-table1.png "table1: Essential Internal Methods")
>举个例子，例如 **Obj.foo**，引擎内部会调用`[[Get]]`内部方法读取属性值。

- **table2:**

![Alt text](/images/framework/vue3-object-table2.png "table2: Additional Essential Internal Methods of Function Objects")

**一个对象必须部署 `table 1` 这 11 个内部方法，一个对象如果被作为函数和构造函数调用时，就会自动部署 `table 2` 这两个方法。**

当我们查阅 `ECMAScript` 对 `Proxy` 的定义后，我们发现：

虽然`Proxy` 内部实现的方法和`table 1` ，`table 2`中的方法一样，但是行为确是不同的 **（内部方法的多态性）**。引擎内部会调用部署到代理对象中的`[[Get]]`内部方法读取属性值，虽然会部署相同的内部方法，但是当创建代理对象的时候没有指定的对应拦截函数，就会调用原始对象的`[[Get]]`方法。从`[[Get]]`就可以看出，**`Proxy`是一个异质对象，因为并没有按照 `table 1` 中的规范来。** 

附：Proxy对象部署的所有内部方法

![Alt text](/images/framework/vue3-object-table-proxy.png "Proxy Handler Methods")

### Reflect (ES6新增)
**Reflect** 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 **proxy handler** 的方法相同。**Reflect 不是一个函数对象，因此它是不可构造的**，所以不能通过 `new` 运算符对其进行调用，或者将 Reflect 对象作为一个函数来调用。**Reflect 的所有属性和方法都是静态的**（就像 `Math` 对象）。

>Reflect的出现主要是为了将一些Object对象上的方法转移到Reflect上，使得操作对象更加统一和易于理解。通过这种方式，实现了对Object上方法的封装和统一。

:::danger 问题
既然 **Reflect** 和 **proxy handler** 的方法操作等价，那么它存在的意义是什么呢？
:::

因为 **Proxy** 代理的对象，需要用到 **Reflect** 第三个参数`receiver`，用来修改 **getter** **setter** 内部指针。

让我们一起来看一个例子：<Icon name="emojione-v1:chestnut" />
```js{4}
const obj = { 
  foo: 1，
  get bar() {
    return this.foo
  }
}

const p = new Proxy(obj, {
  get(target, key) {
    track(target, key)
    return target[key]
  },
  set(target, key, newVal) {
    target[key] = newVal
    trigger(target, key)
  }
})
```
这是一段最基本的实现响应式数据的代码。在 **get** 和 **set** 拦截函数中，我们都是直接使用 **原始对象target** 来完成对属性的读取和设置操作的。其中原始对象target就是上述代码中的 **obj对象** 。

可以看到，**bar** 属性是一个访问器属性，它返回了 `this.foo` 属性的值。接着，我们在 **effect** 副作用函数中通过 **代理对象p** 访问 **bar属性**。
```js
effect(() => {
  console.log(p.bar)
})
```
当 **effect** 注册的副作用函数执行时，会读取 `p.bar` 属性，它发现 `p.bar` 是一个访问器属性，因此执行 **getter** 函数。由于在 **getter**函数中通过 `this.foo` 读取了 **foo**属性值，因此副作用函数与属性 **foo** 之间也会建立联系。当我们修改 `p.foo` 的值时应该能够触发响应，使得副作用函数重新执行才对。然而实际并非如此，当我们尝试修改 `p.foo` 的值时：
```js
p.foo++
```
副作用函数并没有重新执行。

实际上，问题就出在 bar 属性的访问器函数 getter 里：在 get 拦截函数内，通过 `target[key]` 返回属性值。其中 target 是原始对象obj，而 key 就是字符串 `'bar'`，**所以 `target[key]` 相当于 `obj.bar`**。因此，当我们使用 `p.bar` 访问 bar 属性时，它的 getter 函数内的 **this** 指向的其实是原始对象 obj，**这说明我们最终访问的其实是 `obj.foo`**。其等价于
```js
effect(() => {
  // obj 是原始数据，不是代理对象，这样的访问不能够建立响应联系
  obj.foo
})
```
下面我们就来解决一下这个问题 <Icon name="tabler:bulb-filled" color="#ffda1f" size="1.5rem"/>
```js
const p = new Proxy(obj, {
  // 拦截读取操作，接受第三个参数 receiver
  get(target, key, receiver) {
    track(target, key)
    // 使用 Reflect.get 返回读取到的属性值
    return Reflect.get(target, key, receiver)
  }
})
```
代理对象的 get 拦截函数接受第三个参数 `receiver`，它代表谁在读取属性。
```js
p.bar // 代理对象 p 在读取 bar 属性
```
this 由原始对象 obj 变成了代理对象 p。很显然，这会在副作用函数与响应式数据之间建立响应式联系，从而达到依赖收集的效果。如果此时再对 `p.foo` 进行自增操作，会发现已经能够触发副作用函数重新执行了。