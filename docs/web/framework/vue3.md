---
title: vue3
author:
createTime: 2024/05/09 15:58:15
permalink: /article/w30gz4aj/
---
# VUE3

## Vue.js框架
**1. __DEV__常量**

`Vue.js`使用`rollup.js`对项目进行构建，这里的__DEV__常量实际上是通过`rollup.js`的插件配置来预定义的，其功能类似于`webpack`中的`DefinePlugin`插件。

当`Vue.js`构建用于开发环境的资源时，会把__DEV__常量设置为`true`，而当`Vue.js`构建用于生产环境的资源时，就会把__DEV__常量设置为`false`，这样这段代码(dead code)就永远不会被执行。它在构建资源时就会被移除。
```js
if (__DEV__ && !res) {
  warn(`Failed to mount app: mount target selector "${container}" returned null.`)
}
```

**2. Tree-Shaking**

**Tree-Shaking** 指的就是消除那些永远不会被执行的代码，也就是排除dead code。(`rollup.js`和`webpack`都支持`Tree-Shaking`)

- 模块必须是`ESM(ES Module)`，因为Tree-Shaking依赖ESM的静态结构。
- 一个函数调用会产生副作用，就无法被Tree-Shaking移除。
- 使用 `/*# __ PURE __ */`注释
```js
export const isHTMLTag = /*# __ PURE __ */ makeMap(HTML_TAGS)
```


## 响应式系统

:::tip 思考
在介绍响应式之前，我们先来思考一个问题，**什么是响应式？为什么需要响应式？**

**Vue**的官网这样解释道：“**Vue**能够**拦截**对响应式对象所有属性的**访问**和**修改**，以便进行**依赖追踪**和**触发更新**。”于是当某一数据（对象）具有响应式时，它的变化是可以**被检测到**，并**对这种变化做出响应机制**，比如通知依赖它的系统。这就是**数据响应式**。

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