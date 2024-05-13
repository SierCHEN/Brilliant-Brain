<template><div><h1 id="how-browsers-work" tabindex="-1"><a class="header-anchor" href="#how-browsers-work"><span>How browsers work</span></a></h1>
<p><small>摘自于《How browsers work》一文 <a href="https://web.dev/articles/howbrowserswork" target="_blank" rel="noopener noreferrer">https://web.dev/articles/howbrowserswork<ExternalLinkIcon/></a></small></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>⭐In the years of IE 90% dominance there was nothing much to do but regard the browser as a &quot;black box&quot;, but now, with open source browsers having more than half of the usage share, it's a good time to take a peek under the engine's hood and see what's inside a web browser. Well, what's inside are millions of C++ lines…</p>
</div>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>网络浏览器是使用最广的软件。在这篇入门指南中，我将介绍它们的幕后工作原理。我们将了解当您在地址栏中输入 google.com 直到您在浏览器屏幕上看到 Google 页面之前，会发生什么。</p>
<h2 id="我们要讨论的浏览器" tabindex="-1"><a class="header-anchor" href="#我们要讨论的浏览器"><span>我们要讨论的浏览器</span></a></h2>
<p>目前，桌面设备使用五大主流浏览器：<code v-pre>Chrome</code>、<code v-pre>Internet Explorer</code>、<code v-pre>Firefox</code>、<code v-pre>Safari</code>和<code v-pre>Opera</code>。</p>
<p>移动设备主要有<code v-pre>Android 浏览器</code>、<code v-pre>iPhone</code>、<code v-pre>Opera Mini</code>和<code v-pre>Opera Mobile</code>、<code v-pre>UC 浏览器</code>、<code v-pre>Nokia S40/S60 浏览器</code>以及<code v-pre>Chrome</code>，所有这些浏览器（Opera 浏览器除外）都基于<code v-pre>WebKit</code>。</p>
<blockquote>
<p>根据 StatCounter 统计信息（截至 2013 年 6 月），Chrome、Firefox 和 Safari 占全球桌面浏览器使用量的 71% 左右。在移动设备上，Android 浏览器、iPhone 和 Chrome 使用量约占总使用量的 54%。</p>
</blockquote>
<h2 id="浏览器的主要功能" tabindex="-1"><a class="header-anchor" href="#浏览器的主要功能"><span>浏览器的主要功能</span></a></h2>
<p>浏览器的主要功能是呈现您选择的网络资源，方法是从服务器请求该资源并在浏览器窗口中显示该资源。资源通常是<code v-pre>HTML</code>文档，但也可能是 PDF、图片或其他一些类型的内容。资源的位置由用户使用<code v-pre>URI（统一资源标识符） </code>指定。</p>
<p>各个浏览器界面之间有许多共同点。常见的界面元素包括：</p>
<ul>
<li>用于插入 URI 的地址栏</li>
<li>“后退”和“前进”按钮</li>
<li>书签选项</li>
<li>用于刷新或停止加载当前文档的刷新和停止按钮</li>
<li>用于转到首页的“主页”按钮</li>
</ul>
<p>奇怪的是，浏览器的界面并没有在任何正式的规范中明确指定，而是源于多年来积累的良好实践以及各浏览器相互模仿的结果。 HTML5 规范未定义浏览器必须具有的界面元素，但列出了一些常见元素。例如地址栏、状态栏和工具栏。当然，有些浏览器还有其特有的功能，例如 Firefox 的下载管理器。</p>
<h2 id="浏览器的高层结构-high-level-structure" tabindex="-1"><a class="header-anchor" href="#浏览器的高层结构-high-level-structure"><span>浏览器的高层结构(high level structure)</span></a></h2>
<p>浏览器的主要组件包括：</p>
<ul>
<li><strong>界面：</strong> 包括地址栏、前进/后退按钮、书签菜单等。</li>
<li><strong>浏览器引擎：</strong> 在界面和渲染引擎之间传递指令。</li>
<li><strong>渲染引擎：</strong> 负责显示所请求的内容。例如，如果请求的内容是<code v-pre>HTML</code>，渲染引擎会解析<code v-pre>HTML</code>和<code v-pre>CSS</code>，并将解析后的内容显示在屏幕上。</li>
<li><strong>网络：</strong> 适用于<code v-pre>HTTP</code>请求等网络调用，在独立于平台的接口后，不同平台有不同的实现。</li>
<li><strong>UI后端：</strong> 用于绘制基本<code v-pre>widget</code>，如组合框和窗口。该后端提供了一个通用接口，与平台无关。它使用操作系统的用户界面方法。</li>
<li><strong>JavaScript 解释器：</strong> 用于解析和执行<code v-pre>JavaScript</code>代码。</li>
<li><strong>数据存储：</strong> 这是一个持久层。浏览器可能需要在本地保存各种数据，如<code v-pre>cookie</code>。浏览器还支持<code v-pre>localStorage</code>、<code v-pre>IndexedDB</code>、<code v-pre>WebSQL</code>和<code v-pre>FileSystem</code>等存储机制。</li>
</ul>
<p><img src="@source/web/browser/images/browser-work-1-structure.png" alt="browsers_high_level_structure"></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Chrome等浏览器会运行多个渲染引擎实例：每个标签页对应一个实例。每个标签页都在单独的进程中运行。</p>
</div>
<h2 id="渲染引擎" tabindex="-1"><a class="header-anchor" href="#渲染引擎"><span>渲染引擎</span></a></h2>
<p>渲染引擎的责任就是渲染，也就是在浏览器屏幕上显示请求的内容。</p>
<p>默认情况下，渲染引擎可显示<code v-pre>HTML</code>和<code v-pre>XML</code>文档及图片。它可以通过插件或扩展程序显示其他类型的数据；例如，使用PDF查看器插件显示PDF文档。</p>
<p>不同浏览器的不同渲染引擎：</p>
<ul>
<li><strong>Internet Explorer：</strong> <code v-pre>Trident</code></li>
<li><strong>Firefox：</strong> <code v-pre>Gecko</code></li>
<li><strong>Safari：</strong> <code v-pre>WebKit</code></li>
<li><strong>Chrome/Opera（版本 15）：</strong> <code v-pre>Blink</code>(它是<code v-pre>WebKit</code>的一个分支)</li>
</ul>
</div></template>


