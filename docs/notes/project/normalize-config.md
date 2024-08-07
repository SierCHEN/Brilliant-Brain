---
title: vue3 代码规范最佳实践
author:
createTime: 2024/05/09 15:58:15
permalink: /project/normalize-config/
---
> vite + vue + ts + pinia + vue-router + eslint + stylelint + prettier + husky + lint-staged + commitlint

# 初始化工程

> 针对**vite**的学习，如果你感兴趣，请移步[vite](../web/framework/vite.md)

:::warning
Vite 需要 Node.js 版本 18+，20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。
:::

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest vue3-standard-config -- --template vue-ts
# npm create 等价于 npm init

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

## vite@latest
`vite@`后面跟的`latest`是指最新的版本号，当然啦，不跟`latest`还是会帮你安装最新的版本。如果你想要指定版本，可以将`latest`替换成你想要的版本号(命令`npm view create-vite versions`可以帮你查找所有create-vite版本)。

值得注意的是，笔者搭建工程时，`vite`的最新版本是`5.2.1`，但是创建完工程后`package.json`文件中的`vite`依赖版本是`^5.1.4`，这里就不得不提到另一个知识点了，依赖版本号前面的`^`和`~`代表什么？

:::tip 提示
- **指定版本**：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
- **波浪号（tilde）**：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
- **插入号（caret）**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
- **latest**：安装最新版本。
:::

所以，即使是`^5.1.4`，我们还是会安装最新的版本。

## vue-ts
`template`后面跟的是模板，比如说`vue`就是**vite + vue**工程，`vue-ts`是**vite + vue + ts**工程。

vite目前支持的模板有：
| JavaScript    | TypeScript    |
| ------------- |:-------------:|
| vanilla       | vanilla-ts    |
| vue           | vue-ts        |
| react         | react-ts      |
| preact        | preact-ts     |
| lit           | lit-ts        |
| svelte        | svelte-ts     |
| solid         | solid-ts      |
| qwik          | qwik-ts       |

当然你也可以不用模板，这样的话，你就需要:

**1. 选择框架**

![An image](/images/project/npm-create-vite1.png)

**2. 选择语言**

![An image](/images/project/npm-create-vite2.png)

**3. 最后，大功告成**

![An image](/images/project/npm-create-vite3.png)

## 报错

**1.找不到模块“vue”**
> 找不到模块“vue”。你的意思是要将 "moduleResolution" 选项设置为 "node"，还是要将别名添加到 "paths" 选项中?

![An image](/images/project/npm-create-vite-error.png)

解决方法是，在tsconfig.json文件中修改。修改完之前重启编辑器(vscode)，如果重启后还是有问题，可以升级一下编辑器版本。
```json
"moduleResolution": "node"
```


<br />

**2.找不到模块“./App.vue”或其相应的类型声明**

![An image](/images/project/npm-create-vite-error2.png)

由于`.ts`文件识别不了`.vue`文件，虽然可以编译运行，但是着实看不惯这红色波浪线，那咱们就来解决一下。

**(1). 在src目录下创建.d.ts文件**

如果已经有`vite-env.d.ts`文件，就不用创建了

**(2). 在.d.ts文件写入**
```js
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
```

<br />

# 配置eslint

## 安装eslint
```bash
npm install eslint --save-dev
```

## eslint初始化
```bash
npx eslint --init
```

![An image](/images/project/npm-eslint-init.png)

```shell
(1) How would you like to use ESLint?
# To check syntax and find problems

(2) What type of modules does your project use?
# JavaScript modules (import/export)

(3) Which framework does your project use?
# Vue.js

(4) Does your project use TypeScript?
# Yes

(5) Where does your code run?
# Browser

(6) What format do you want your config file to be in?
# JavaScript

(7) Would you like to install them now?
# Yes

(8) Which package manager do you want to use?
# pnpm
```
依赖安装完成之后，会自动生成一个`.eslintrc.cjs`文件
```javascript
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended", // 使用推荐的eslint
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],

  // vue-eslint-parser 是一个用于解析Vue 单文件组件的ESLint 解析器。 
  // 它将Vue 单文件组件中的模板、JavaScript 和样式代码分别解析为AST（抽象语法树），
  // 以便于ESLint 进行代码静态分析、规范检查、代码风格检查等操作。
  "parser": 'vue-eslint-parser',

  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "vue"
  ],
  "rules": {
  }
}

```


## 安装vite-plugin-eslint （民间插件， 8.5.1以上没法识别到 eslint配置文件，建议使用官方插件eslint-plugin-vue）
```bash
npm install vite-plugin-eslint --save-dev
```
`vite-plugin-eslint`是一个用于在 Vite 构建过程中集成 ESLint 检查的插件。它可以帮助您在开发过程中检查代码是否符合 ESLint 规则，并在控制台输出错误或警告信息。

当然如果你选择不安装`vite-plugin-eslint`是完全可以的，但是这样的话在`npm run dev`的时候，就不会主动检查代码了。

此时，你的`vite.config.ts`文件可能会报错：

> Could not find a declaration file for module 'vite-plugin-eslint'. 'd:/git项目/vue3/vue3-standard-config/node_modules/vite-plugin-eslint/dist/index.mjs' implicitly has an 'any' type.

这是因为`vite-plugin-eslint`这个库没有提供 TypeScript 的类型声明。当 import 一个没有类型声明的第三方库时，TypeScript 不知道 import 进来的东西是什么类型，只能偷偷地把它指定成 any 类型，这也就是我们常说的**隐式 any（implicit any）**。所有正常的前端项目都会禁止 implicit any 出现，所以就报错了。

## 执行eslint
在`package.json`文件中的script中添加`eslint`命令
```javascript
{
    "scripts": {
        // eslint . 为指定lint当前项目中的文件
        // --ext 为指定lint哪些后缀的文件
        // --fix 开启自动修复
        "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
    }
}
```


<br />

# 安装prettier


<br />

# 配置pinia
```bash
npm install pinia
# 或者使用 yarn
yarn add pinia
```