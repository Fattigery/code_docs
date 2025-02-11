# Emmet 语法

### 参考资料

[Emmet-HTML/CSS 代码自动补全语法](https://code.z01.com/Emmet/#a1)

[Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### 子集 >

```HTML
<!-- ul>li -->
<ul>
  <li></li>
</ul>
```

### 同级 +

```HTML
<!-- div+span -->
<div></div>
<span></span>
```

### 父级 ^

> 以此内推^^表示上上级

```HTML
<!-- ul>li^div -->
<ul>
  <li></li>
</ul>
<div></div>

<!-- ul>li>em^^span -->
<ul>
  <li>
    <em></em>
  </li>
</ul>
<span></span>
```

### 分组 ()

> 括号里面的内容是一个整体，括号内部的嵌套关系和外面的的层级无关。

```HTML
<!-- div>(header>div)+footer>span -->
<div>
  <header>
    <div></div>
  </header>
  <footer>
    <span></span>
  </footer>
</div>
```

### 乘法 \*

```HTML
<!-- ul>li*5 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### 自增符号 $（默认从 1 开始自增）

- 几个$就表示几个数字
- 在$后面加`@-`表示倒序自增
- 在$后面加`@2`表示从 2 开始自增

```HTML
<!-- h${$}*5-->
<h1>1</h1>
<h2>2</h2>
<h3>3</h3>
<h4>4</h4>
<h5>5</h5>

<!-- 几个$就表示几个数 -->
<!-- h${$$$}*3 -->
<h1>001</h1>
<h2>002</h2>
<h3>003</h3>

<!-- h$@-{$@-}*4 -->
<h5>5</h5>
<h4>4</h4>
<h3>3</h3>
<h2>2</h2>
<h1>1</h1>

<!-- h$@3{$@3}*3 -->
<h3>3</h3>
<h4>4</h4>
<h5>5</h5>
```

### ID 和类属性

```HTML
<!--
  id：#
  class：.
 -->

<!-- #abc -->
<div id="abc"></div>
<!-- .cba -->
<div class="cba"></div>
<!-- #abc.cba -->
<div id="abc" class="cba"></div>
<!-- .abc.cba.aaa -->
<div class="abc cba aaa"></div>
```

### 自定义属性

```HTML
<!-- []：属性 -->
<!-- span[title="hello" data-name="world" index=2 type] -->
<span title="hello" data-name="world" index="2" type=""></span>
```

### 文本 {}

```HTML
<!-- ul>li{$$$}*5 -->
<ul>
  <li>001</li>
  <li>002</li>
  <li>003</li>
  <li>004</li>
  <li>005</li>
</ul>
```

### 测试文本 Lorem

```HTML
<!-- Lorem -->
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, amet saepe
  repudiandae vitae nisi aut eveniet inventore, deleniti, quo dolor perspiciatis
  molestiae. Sint voluptate quas illum magni? Nemo, iusto perspiciatis!
</p>
```
