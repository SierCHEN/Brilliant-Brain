---
title: vue-router
author:
createTime: 2024/05/13 11:23:53
permalink: /article/frdimb4n/
---
# Vue Router 
:::tip
Vue.js的官方[路由](https://router.vuejs.org/zh/)
:::

## $router VS $route
`$router`是 **Vue Router** 的实例，包含了整个路由器的配置信息，可以理解为全局的路由控制器。它提供了一些方法和属性，比如`push`、`replace`和`go`等方法，用于改变 **URL**，以及`currentRoute`、`matched`等属性，用于获取路由相关信息。

`$route`是当前激活的路由对象，包含了当前 **URL** 解析得到的信息。也就是说，每次改变 **URL** 时，`$route`都会更新。
`$route`对象有很多属性，比如`path`表示当前路径，`query`表示查询参数，`params`表示动态路由参数，还有`hash`、`fullPath`等属性，可以根据具体需要来使用。

```js{4,10,12}
export default {
  computed: {
    username() {
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
```

## hash VS history
`hash` 模式是用 `createWebHashHistory()` 创建的：

```js
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```

它在内部传递的实际 **URL** 之前使用了一个哈希字符`（#）`。由于这部分 **URL** 从未被发送到服务器，所以<Badge text="1"/>它不需要在服务器层面上进行任何特殊处理。不过，<Badge text="2"/>它在 SEO 中确实有不好的影响。

## 路由守卫