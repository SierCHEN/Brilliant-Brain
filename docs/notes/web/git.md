---
title: git
author:
createTime: 2024/05/29 16:37:51
permalink: /web/git/
---

## 分布式版本管理系统
在理解**分布式版本管理系统**之前，我们先来了解一下**集中式版本管理系统**，比如说`SVN`、`CVCS`。

**集中式系统**中通常使用的是单点协作模型——集中式工作流。 一个中心集线器，或者说 **仓库**，可以接受代码，所有人将自己的工作与之同步。 若干个开发者则作为节点，即中心仓库的消费者与中心仓库同步。也就是说，**集中式系统非常依赖中心仓库**。

![An image](/images/control/centralized-workflow.png)

## 内容寻址文件系统
内容寻址存储(Content-Addressed Storage)，简称CAS，是一种基于内容进行信息检索的存储方式