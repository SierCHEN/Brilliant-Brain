<template><div><h1 id="vue3-代码规范最佳实践" tabindex="-1"><a class="header-anchor" href="#vue3-代码规范最佳实践"><span>vue3 代码规范最佳实践</span></a></h1>
<blockquote>
<p>vite + vue + ts + pinia + vue-router + eslint + stylelint + prettier + husky + lint-staged + commitlint</p>
</blockquote>
<h2 id="初始化工程" tabindex="-1"><a class="header-anchor" href="#初始化工程"><span>初始化工程</span></a></h2>
<blockquote>
<p>针对<strong>vite</strong>的学习，如果你感兴趣，请移步<RouteLink to="/web/framework/vite.html">vite</RouteLink></p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>Vite 需要 Node.js 版本 18+，20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。</p>
</div>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># npm 7+, extra double-dash is needed:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue3-standard-config</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --template</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue-ts</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># npm create 等价于 npm init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># yarn</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-vue-app</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --template</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># pnpm</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> my-vue-app</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --template</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vue</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-latest" tabindex="-1"><a class="header-anchor" href="#vite-latest"><span>vite@latest</span></a></h3>
<p><code v-pre>vite@</code>后面跟的<code v-pre>latest</code>是指最新的版本号，当然啦，不跟<code v-pre>latest</code>还是会帮你安装最新的版本。如果你想要指定版本，可以将<code v-pre>latest</code>替换成你想要的版本号(命令<code v-pre>npm view create-vite versions</code>可以帮你查找所有create-vite版本)。</p>
<p>值得注意的是，笔者搭建工程时，<code v-pre>vite</code>的最新版本是<code v-pre>5.2.1</code>，但是创建完工程后<code v-pre>package.json</code>文件中的<code v-pre>vite</code>依赖版本是<code v-pre>^5.1.4</code>，这里就不得不提到另一个知识点了，依赖版本号前面的<code v-pre>^</code>和<code v-pre>~</code>代表什么？</p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<ul>
<li><strong>指定版本</strong>：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。</li>
<li><strong>波浪号（tilde）</strong>：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。</li>
<li><strong>插入号（caret）</strong>：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。</li>
<li><strong>latest</strong>：安装最新版本。</li>
</ul>
</div>
<p>所以，即使是<code v-pre>^5.1.4</code>，我们还是会安装最新的版本。</p>
<h3 id="vue-ts" tabindex="-1"><a class="header-anchor" href="#vue-ts"><span>vue-ts</span></a></h3>
<p><code v-pre>template</code>后面跟的是模板，比如说<code v-pre>vue</code>就是<strong>vite + vue</strong>工程，<code v-pre>vue-ts</code>是<strong>vite + vue + ts</strong>工程。</p>
<p>vite目前支持的模板有：</p>
<table>
<thead>
<tr>
<th>JavaScript</th>
<th style="text-align:center">TypeScript</th>
</tr>
</thead>
<tbody>
<tr>
<td>vanilla</td>
<td style="text-align:center">vanilla-ts</td>
</tr>
<tr>
<td>vue</td>
<td style="text-align:center">vue-ts</td>
</tr>
<tr>
<td>react</td>
<td style="text-align:center">react-ts</td>
</tr>
<tr>
<td>preact</td>
<td style="text-align:center">preact-ts</td>
</tr>
<tr>
<td>lit</td>
<td style="text-align:center">lit-ts</td>
</tr>
<tr>
<td>svelte</td>
<td style="text-align:center">svelte-ts</td>
</tr>
<tr>
<td>solid</td>
<td style="text-align:center">solid-ts</td>
</tr>
<tr>
<td>qwik</td>
<td style="text-align:center">qwik-ts</td>
</tr>
</tbody>
</table>
<p>当然你也可以不用模板，这样的话，你就需要:</p>
<p><strong>1. 选择框架</strong></p>
<p><img src="@source/project/~@alias/project/npm-create-vite1.png" alt="An image"></p>
<p><strong>2. 选择语言</strong></p>
<p><img src="@source/project/~@alias/project/npm-create-vite2.png" alt="An image"></p>
<p><strong>3. 最后，大功告成</strong></p>
<p><img src="@source/project/~@alias/project/npm-create-vite3.png" alt="An image"></p>
<h3 id="报错" tabindex="-1"><a class="header-anchor" href="#报错"><span>报错</span></a></h3>
<p><strong>1.</strong></p>
<blockquote>
<p>找不到模块“vue”。你的意思是要将 &quot;moduleResolution&quot; 选项设置为 &quot;node&quot;，还是要将别名添加到 &quot;paths&quot; 选项中?</p>
</blockquote>
<p><img src="@source/project/~@alias/project/npm-create-vite-error.png" alt="An image"></p>
<p>解决方法是，在tsconfig.json文件中修改。修改完之前重启编辑器(vscode)，如果重启后还是有问题，可以升级一下编辑器版本。</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">moduleResolution</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">node</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br />
<p><strong>2.</strong></p>
<blockquote>
<p>找不到模块“./App.vue”或其相应的类型声明。</p>
</blockquote>
<p><img src="@source/project/~@alias/project/npm-create-vite-error2.png" alt="An image"></p>
<p>由于<code v-pre>.ts</code>文件识别不了<code v-pre>.vue</code>文件，虽然可以编译运行，但是着实看不惯这红色波浪线，那咱们就来解决一下。</p>
<p><strong>(1). 在src目录下创建.d.ts文件</strong></p>
<p>如果已经有<code v-pre>vite-env.d.ts</code>文件，就不用创建了</p>
<p><strong>(2). 在.d.ts文件写入</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">declare</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> module</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">*.vue</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Component</span><span style="--shiki-light:#999999;--shiki-dark:#666666">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994">ReturnType</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">typeof</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineComponent</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> Component</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br />
<h2 id="配置eslint、stylelint、prettier" tabindex="-1"><a class="header-anchor" href="#配置eslint、stylelint、prettier"><span>配置eslint、stylelint、prettier</span></a></h2>
<h3 id="安装eslint" tabindex="-1"><a class="header-anchor" href="#安装eslint"><span>安装eslint</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --save-dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="eslint初始化" tabindex="-1"><a class="header-anchor" href="#eslint初始化"><span>eslint初始化</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --init</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/project/~@alias/project/npm-eslint-init.png" alt="An image"></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> How</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ESLint?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># To check syntax and find problems</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> What</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> of</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> modules</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> does</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># JavaScript modules (import/export)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Which</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> framework</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> does</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Vue.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Does</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> TypeScript?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Where</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> does</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Browser</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">6</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> What</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> format</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> do</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> want</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> file</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> be</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> in?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># JavaScript</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">7</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> them</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> now?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># Yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">8</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Which</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> manager</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> do</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> want</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use?</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># pnpm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依赖安装完成之后，会自动生成一个<code v-pre>.eslintrc.cjs</code>文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">module</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">exports</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">env</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">browser</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">es2021</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">node</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">extends</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">eslint:recommended</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 使用推荐的eslint</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">plugin:@typescript-eslint/recommended</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">plugin:vue/vue3-essential</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">plugin:vue/vue3-recommended</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 使用插件支持vue3</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">overrides</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">      "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">env</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">        "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">node</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">      "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">files</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">        "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">.eslintrc.{js,cjs}</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      ],</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">      "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">parserOptions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">        "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">sourceType</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">script</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // vue-eslint-parser 是一个用于解析Vue 单文件组件的ESLint 解析器。 </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 它将Vue 单文件组件中的模板、JavaScript 和样式代码分别解析为AST（抽象语法树），</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 以便于ESLint 进行代码静态分析、规范检查、代码风格检查等操作。</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">parser</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue-eslint-parser</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">parserOptions</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ecmaVersion</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">latest</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">parser</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@typescript-eslint/parser</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">sourceType</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">module</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">plugins</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@typescript-eslint</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vue</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  ],</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rules</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装vite-plugin-eslint" tabindex="-1"><a class="header-anchor" href="#安装vite-plugin-eslint"><span>安装vite-plugin-eslint</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vite-plugin-eslint</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --save-dev</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>vite-plugin-eslint</code>是一个用于在 Vite 构建过程中集成 ESLint 检查的插件。它可以帮助您在开发过程中检查代码是否符合 ESLint 规则，并在控制台输出错误或警告信息。</p>
<p>当然如果你选择不安装<code v-pre>vite-plugin-eslint</code>是完全可以的，但是这样的话在<code v-pre>npm run dev</code>的时候，就不会主动检查代码了。</p>
<p>此时，你的<code v-pre>vite.config.ts</code>文件可能会报错：</p>
<blockquote>
<p>Could not find a declaration file for module 'vite-plugin-eslint'. 'd:/git项目/vue3/vue3-standard-config/node_modules/vite-plugin-eslint/dist/index.mjs' implicitly has an 'any' type.</p>
</blockquote>
<p>这是因为<code v-pre>vite-plugin-eslint</code>这个库没有提供 TypeScript 的类型声明。当 import 一个没有类型声明的第三方库时，TypeScript 不知道 import 进来的东西是什么类型，只能偷偷地把它指定成 any 类型，这也就是我们常说的<strong>隐式 any（implicit any）</strong>。所有正常的前端项目都会禁止 implicit any 出现，所以就报错了。</p>
<h3 id="执行eslint" tabindex="-1"><a class="header-anchor" href="#执行eslint"><span>执行eslint</span></a></h3>
<p>在<code v-pre>package.json</code>文件中的script中添加<code v-pre>eslint</code>命令</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">scripts</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // eslint . 为指定lint当前项目中的文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // --ext 为指定lint哪些后缀的文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">        // --fix 开启自动修复</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">        "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">lint</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br />
<h2 id="配置pinia" tabindex="-1"><a class="header-anchor" href="#配置pinia"><span>配置pinia</span></a></h2>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pinia</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 或者使用 yarn</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pinia</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


