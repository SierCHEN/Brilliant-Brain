<template><div><h1 id="浏览器渲染" tabindex="-1"><a class="header-anchor" href="#浏览器渲染"><span>浏览器渲染</span></a></h1>
<h2 id="回流-reflow" tabindex="-1"><a class="header-anchor" href="#回流-reflow"><span>回流 reflow</span></a></h2>
<p>回流是指当元素的几何属性发生变化，浏览器需要重新计算元素的<a href="#%E5%87%A0%E4%BD%95%E5%B1%9E%E6%80%A7">几何属性</a>，并重新布局整个页面。</p>
<br />
<h3 id="几何属性" tabindex="-1"><a class="header-anchor" href="#几何属性"><span>几何属性</span></a></h3>
<p>包括布局、尺寸等可用数学几何衡量的属性。</p>
<ul>
<li>布局：<code v-pre>display</code> <code v-pre>float</code> <code v-pre>position</code> <code v-pre>list</code> <code v-pre>table</code> <code v-pre>flex</code> <code v-pre>columns</code> <code v-pre>grid</code></li>
<li>尺寸：<code v-pre>margin</code> <code v-pre>padding</code> <code v-pre>border</code> <code v-pre>width</code> <code v-pre>height</code></li>
</ul>
<br />
<h3 id="常见的引起回流的属性和方法" tabindex="-1"><a class="header-anchor" href="#常见的引起回流的属性和方法"><span>常见的引起回流的属性和方法</span></a></h3>
<ul>
<li>添加或删除可见的DOM元素</li>
<li>元素尺寸改变</li>
<li>内容变化，比如在<code v-pre>input</code>框中输入文字</li>
<li>浏览器窗口尺寸改变</li>
<li>计算offsetTop、offsetLeft等布局信息  <Badge type="tip" text="tip" vertical="top" />
<ul>
<li><code v-pre>offsetTop</code> <code v-pre>offsetLeft</code> <code v-pre>offsetWidth</code> <code v-pre>offsetHeight</code></li>
<li><code v-pre>scrollTop</code> <code v-pre>scrollLeft</code> <code v-pre>scrollWidth</code> <code v-pre>scrollHeight</code></li>
<li><code v-pre>clientTop</code> <code v-pre>clientLeft</code> <code v-pre>clientWidth</code> <code v-pre>clientHeight</code></li>
<li><code v-pre>getComputedStyle()</code></li>
<li><code v-pre>getBoundingClientRect()</code></li>
</ul>
</li>
<li>设置style属性的值  <Badge type="warning" text="应该是width、height等属性" vertical="middle" /></li>
<li>激活CSS伪类，例如：hover</li>
<li>查询某些属性或调用某些方法</li>
</ul>
<br />
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><strong>我们可能会感到疑惑，为什么只是获取这些属性值，并没有改变它，为什么会触发回流呢?</strong> 🤨</p>
<p>由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！当我们执行获取布局信息的操作时，会强制清空队列，因为队列中，可能会有影响到这些值的操作，为了给我们最精确的值，浏览器会立即进行回流+重绘。</p>
</div>
<br />
<h3 id="回流影响范围" tabindex="-1"><a class="header-anchor" href="#回流影响范围"><span>回流影响范围</span></a></h3>
<p>浏览器渲染界面是基于流式布局模型的，所以触发回流时会对周围的DOM重新排列，影响发范围分两种：</p>
<ul>
<li><strong>全局范围</strong></li>
</ul>
<p>从根节点html开始对整个渲染树重新布局。</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">strong</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Name:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">strong</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Author</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">male</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ol</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">loving</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">li</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ol</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">body</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>上面代码中的p节点发生重排时，它的父节点div和body也会发生重排，甚至h5和ol节点也会收到影响。</p>
</blockquote>
<ul>
<li><strong>局部范围</strong></li>
</ul>
<p>对渲染树的某一部分或某一渲染对象进行重新布局。</p>
<p>例如：将一个DOM元素的宽高等几何信息写死，然后在DOM元素内部触发回流，就只会重新渲染该DOM元素内部的元素，而不会影响到外界。</p>
</div></template>


