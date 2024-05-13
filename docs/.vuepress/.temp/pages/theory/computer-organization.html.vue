<template><div><h1 id="计算机组成原理" tabindex="-1"><a class="header-anchor" href="#计算机组成原理"><span>计算机组成原理</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p><img src="@source/theory/~@alias/theory/c-o-architecture.jpg" alt="An image"></p>
<h2 id="冯·诺伊曼体系结构-von-neumann-architecture" tabindex="-1"><a class="header-anchor" href="#冯·诺伊曼体系结构-von-neumann-architecture"><span>冯·诺伊曼体系结构(Von Neumann architecture)</span></a></h2>
<p>即 <strong>存储程序计算机</strong>（“可编程” + “可存储”），抽象为从输入设备读取输入信息，通过运算器和控制器来执行存储在存储器里的程序，最终把结果输出到输出设备中。</p>
<p>包含：</p>
<ul>
<li><strong>处理器单元<code v-pre>(Processing Unit)</code></strong>，包含算数逻辑单元<code v-pre>(Arithmetic Logic Unit, ALU)</code>和处理器寄存器<code v-pre>(Progressor Register)</code>，用来完成各种算数和逻辑运算。</li>
<li><strong>控制器单元<code v-pre>(Control Unit/CU)</code></strong>，包含指令寄存器<code v-pre>(Instruction Register)</code>和程序计数器<code v-pre>(Program Counter)</code>，用来控制程序的流程，通常就是不同条件下的分支和跳转。</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>在现在的计算机里，算数逻辑单元和控制器单元共同组成了我们说的CPU。</p>
</div>
<ul>
<li><strong>内存</strong>，存储数据<code v-pre>(Data)</code>和指令<code v-pre>(Instruction)</code>。</li>
<li><strong>外部存储</strong>，比如现在的硬盘，过去的磁带、磁鼓等设备。</li>
</ul>
<p><img src="@source/theory/~@alias/theory/c-o-vonNeumann.jpg" alt="An image"></p>
</div></template>


