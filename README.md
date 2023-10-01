
# Hexo 主题 Tree

一个简洁的主题，主要功能是 “树状导航” + “树状目录”，可选配“评论”和“阅读量”功能，支持基于搜索引擎的全站搜索。通过 fancybox 支持图片点击放大。

有问题欢迎及时 issues

Demo：[https://wujun234.com/](https://wujun234.com/)

![](source/Tree.png)

# 下载主题

下载主题到 `hexo` 根目录中 `themes` 目录下
```
git clone https://github.com/wujun234/hexo-theme-tree.git  themes/tree
```

修改 `hexo` 根目录的 `_config.yml`
```
theme: tree
```
# 配置主题
## 1 评论框
### valine
- 如果要使用 `valine` 的评论及阅读量功能，需要在 `themes/tree` 路径下的 `_config.yml` 文件中，填写自己申请的 `leancloud` 账户下面的 `appID` 和 `appKey`，并且分别设置为 true
- 默认是不使用，false

```
valine:
  appID: 
  appKey: 
  enableComment: false 
  enableCounter: false
```

### giscus
- 如果要使用 `giscus` 评论系统，需要在 `themes/tree` 路径下的 `_config.yml`，填写 `giscus` 配置
- 配置页面：https://giscus.app/zh-CN
- 默认是不使用，false

```
giscus:
    enable: false
```

## 2 导航栏和图标
### 图标
替换`themes/tree/source` 路径下的`favicon.ico` 文件

### 自定义链接
- 导航栏：配置化，需要在 `themes/tree` 路径下的 `_config.yml`，需要修改`links`相关配置
```
# 可选
links:
  # github 图标
  github: your github link
  # 普通链接，可多个
  custom:
    - name:
      URL:
```

### about 页
在 `source`路径下，与`_posts`文件夹平行，建立一个`about`页

执行
```
hexo new page --path about/index "About"
```
参考：https://hexo.io/zh-cn/docs/commands.html#new

修改主题 `tree` 目录的 `_config.yml`，添加
```
about: true
```
### tags 页
在 `source`路径下，与`_posts`文件夹平行，建立一个`tags`页

执行
```
hexo new page "tags"
```
编辑 source/tags/index.md
```
---
title: tags
date: 2021-02-26 16:36:55
type: "tags"
layout: "tags"
---
```
修改主题 `tree` 目录的 `_config.yml`，添加
```
tags: true
```

### categories 页
在 `source`路径下，与`_posts`文件夹平行，建立一个`categories`页

执行
```
hexo new page "categories"
```
编辑 source/tags/index.md
```
---
title: categories
date: 2021-02-26 16:36:55
type: "categories"
layout: "categories"
---
```
修改主题 `tree` 目录的 `_config.yml`，添加
```
categories: true
```
## 3 文章树、目录树
页面左侧的文章树是根据 source 文件夹里的文章和文件夹生成的

修改主题 `tree` 目录的 `_config.yml`, `sidebar.usePostTitle`可以控制目录树中展示文件名还是文章名
```
# 左侧导航栏，用文件名还是文章名
sidebar:
  # usePostTitle 为 ture 优先用文章名，不填或为 false 用文件名
  usePostTitle: true
```

## 4 全站搜索
修改主题 `tree` 目录的 `_config.yml`

站点如果【被搜索引擎收录】，可以配置通过搜索引擎全站搜索
- searchEngine: 你选择的搜索引擎搜索 url，默认谷歌，例如"https://www.baidu.com/s?wd="、"https://www.google.com/search?q="
- homeHost: 你的域名，默认当前页面的域名

## 5 pjax
~~主题默认支持了 pjax 跳转，但是在网速慢的时候，pjax 因为没有页面刷新的交互，可能会让人误以为点击没响应。~~

~~如果要去掉 pjax 特性，注释掉主题 'source/js/main.js' 文件中的 'pjaxLoad()' 方法就好。~~

默认注释了，需要打开的就去掉注释

```js
$(document).ready(function () {
  hljs.initHighlightingOnLoad();
  clickTreeDirectory();
  serachTree();
  // pjaxLoad();
  showArticleIndex();
  switchTreeOrIndex();
  scrollToTop();
  pageScroll();
  wrapImageWithFancyBox();
});
```

## 6 国际化（i18n）
- 国际化：需要在 `themes/tree` 路径下的 `_config.yml`，需要修改`language`相关配置
- 小试牛刀，目前就搜索框和导航栏有文字
```
# 默认 en， 可选 en 和 zh-Hans
language: zh-Hans
```

# 其他
## 图片
最开始将图片放在 source 中，使用 github 的相对地址，但是本地 md 编辑器不能识别这样的图片，

后续选择了 picgo，用 github 做图床：https://picgo.github.io/PicGo-Doc/

##  推荐插件
以下插件都是 hexo 的，跟 Tree 主题无关

- 渲染器：[hexo-renderer-markdown-it](https://github.com/hexojs/hexo-renderer-markdown-it)
- 流程图：[hexo-filter-mermaid-diagrams](https://github.com/webappdevelp/hexo-filter-mermaid-diagrams)
- 通用 sitemap: [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
- 百度 sitemap：[hexo-generator-baidu-sitemap](https://github.com/coneycode/hexo-generator-baidu-sitemap)
- 一键部署: [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git)
## 访问管理
~~我自己用的是百度统计 https://tongji.baidu.com ，很简单，注册后在 'head' 里加一个 '<script>' 块就行了~~

现在改用 Cloudflare 了，免费，接入 DNS，会有统计，还有分析。