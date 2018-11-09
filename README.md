# vue-cms

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


### 此demo编写顺序：
1. 采用vue-cli脚手架搭建初始项目（vue init webpack vue-admin-demo）;
2. 关闭eslint校验功能（build/webpack.base.conf.js）;
3. 梳理``App.vue``（入口页面）、``main.js``（入口文件 加载组件 初始化等）、``index.js``（src/router/index.js 总路由）;
4. 梳理系统布局，大致分为头部导航、侧边栏、面包屑以及右侧内容等；
5. 新增views目录，专门存放页面布局，``views/layout/components``下建立对应的头部导航（Header）、侧边栏（Sidebar）、面包屑（）以及右侧内容（Container）等目录，Layout.vue是布局总入口;
6. 在``main.js``中引入``element ui``，并在系统中安装element ui（npm i element-ui -S），element ui会对应安装到系统中，并在package.json中的dependencies存放；
7. npm install xxx -dev需要安装的有：element ui、axios；npm install xxx --save-dev需要安装的有：axios-mock-adapter、sass、sass-loader、node-sass；

注意：在components命名时，最好不要用h5自带标签以及关键词去命名。

### 侧边栏写法

在``views/layout/components/Sidebar``目录下的index.vue中书写侧边栏结构。

- **el-scrollbar**: 

官方基本没有给例子，估计是太简单了，这里我来说明一下。
在翻看``element-ui``官网的文档时，发现其左侧导航和右边的内容超出屏幕时，滚动条的样式比较小巧，通过浏览器审查工具查看，发现它是使用了el-scrollbar的样式，跟element-ui的组件样式命名一致。但文档中并没有关于这个 scrollbar组件的使用文档，搜索一番得知这是一个隐藏组件，官方在 github 的 issues 中表示不会写在文档中，需要用的自己看源码进行调用。

通过阅读源码，``scrollbar``组件暴露了 ``native``, ``wrapStyle``, ``wrapClass``, ``viewClass``, ``viewStyle``, ``noresize``, ``tag``这7个 props属性。具体可查看文档：https://blog.csdn.net/zhouweihua138/article/details/80077311和https://segmentfault.com/a/1190000015068613。

如下编写一个简单的实例：

```HTML
<el-scrollbar wrap-class="sidebar-scrollbar" view-class="sidebar-box" :native="false"></el-scrollbar>最终形成的样子是：
<div class="el-scrollbar">
  <!-- el-scrollbar__wrap el-scrollbar__wrap--hidden-default是自己生成的 -->
  <div class="sidebar-scrollbar el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
    <!-- el-scrollbar__view是自己生成的 -->
    <div class="el-scrollbar__view sidebar-box"></div>s
  </div>
  <!-- 属性:native="false"时会自动生成，若为ture则使用系统默认不会生成下面代码 -->
  <div class="el-scrollbar__bar is-horizontal">
    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
  </div>
  <div class="el-scrollbar__bar is-vertical">
    <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
  </div>
</div>
```
``wrap-class``对应的是el-scrollbar组件的class类名，``view-class``对应的是el-scrollbar子元素下的class类名，同理：``wrap-style``就是el-scrollbar的style，``view-style``就是el-scrollbar子元素下的class类名。:native：如果为``true``就不显示el的bar，也就是el模拟出来的滚动条，如果为``false``就显示模拟的滚动条。

- **el-menu**

侧边栏主要基于 element-ui 的 el-menu 改造。

这里需要注意一下，一般侧边栏有两种形式即：``el-submenu``和 直接``el-menu-item``。 一个是嵌套子菜单，另一个则是直接一个链接。
