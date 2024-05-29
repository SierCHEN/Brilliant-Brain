<template><div><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h1>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2>
<h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数"><span>定义函数</span></a></h3>
<h4 id="函数声明" tabindex="-1"><a class="header-anchor" href="#函数声明"><span>函数声明</span></a></h4>
<p>一个函数定义（也称为函数声明，或函数语句）由 function 关键字，并跟随以下部分组成：</p>
<ul>
<li>函数名称。</li>
<li>函数参数列表，包围在括号中并由逗号分隔。</li>
<li>定义函数的 JavaScript 语句，用大括号括起来，{ /* … */ }。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> square</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式"><span>函数表达式</span></a></h4>
<p>使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式，这是最常见的函数表达式语法形式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> square</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数"><span>匿名函数</span></a></h4>
<p>使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> number</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数"><span>调用函数</span></a></h3>
<h4 id="函数提升" tabindex="-1"><a class="header-anchor" href="#函数提升"><span>函数提升</span></a></h4>
<p>JavaScript 解释器会将整个函数声明提升到当前作用域的顶部。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 所有函数声明实际上都位于作用域的顶部</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> square</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">n</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> n</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> n</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">square</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 25</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数提升仅适用于函数声明，而不适用于函数表达式。以下代码无法运行：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">square</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // ReferenceError: Cannot access 'square' before initialization</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> square</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">n</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">  return</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> n</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> n</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy"><span>Proxy</span></a></h2>
<div class="hint-container caution">
<p class="hint-container-title">问题</p>
<p>什么是 <strong>Proxy</strong>？</p>
<p><strong>MDN</strong> 解释道：“<strong>Proxy 对象</strong> 用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。”
我们都知道，js中一切皆对象。那么什么是对象呢？对象的代理又是什么呢？</p>
</div>
<p>根据 <code v-pre>ECMAScript</code> 规范，对象可分为两种对象，<code v-pre>常规对象(ordinary object)</code> 和 <code v-pre>异质对象(exotic object)</code>， <strong>任何不属于常规对象的对象都是异质对象</strong>。规范指出，</p>
<p>满足以下条件的就是 <strong>常规对象</strong>：内部方法都是由 <code v-pre>table 1</code> 和 <code v-pre>table 2</code> 中规范实现的。</p>
<ul>
<li><strong>table1:</strong></li>
</ul>
<p><img src="/images/language/js-object-table1.png" alt="Alt text" title="table1: Essential Internal Methods"></p>
<blockquote>
<p>举个例子，例如 <strong>Obj.foo</strong>，引擎内部会调用<code v-pre>[[Get]]</code>内部方法读取属性值。</p>
</blockquote>
<ul>
<li><strong>table2:</strong></li>
</ul>
<p><img src="/images/language/js-object-table2.png" alt="Alt text" title="table2: Additional Essential Internal Methods of Function Objects"></p>
<p><strong>一个对象必须部署 <code v-pre>table 1</code> 这 11 个内部方法，一个对象如果被作为函数调用时，就会自动部署 <code v-pre>table 2</code> 这两个方法。</strong></p>
<p>当我们查阅 <code v-pre>ECMAScript</code> 对 <code v-pre>Proxy</code> 的定义后，我们发现：</p>
<p>虽然<code v-pre>Proxy</code> 内部实现的方法和<code v-pre>table 1</code> ，<code v-pre>table 2</code>中的方法一样，但是行为确是不同的。引擎内部会调用部署到代理对象中的<code v-pre>[[Get]]</code>内部方法读取属性值，虽然会部署相同的内部方法，但是当创建代理对象的时候没有指定的对应拦截函数，就会调用原始对象的<code v-pre>[[Get]]</code>方法。从<code v-pre>[[Get]]</code>就可以看出，<strong><code v-pre>Proxy</code>是一个异质对象，因为并没有按照 <code v-pre>table 1</code> 中的规范来。</strong></p>
<p><img src="/images/language/js-object-table-proxy.png" alt="Alt text" title="Proxy Handler Methods"></p>
</div></template>


