## Hexo 主题 Tree

一个简洁的主题，主要功能是 “树状导航” + “树状目录”，可选配“评论”和“阅读量”功能，支持基于搜索引擎的全站搜索。通过 fancybox 支持图片点击放大。

有问题欢迎及时联系，issues、邮件都行

Demo：[https://wujun234.github.io/](https://wujun234.github.io/)

![](source/Tree.png)

## 使用说明

### 1 下载主题

下载主题到 `hexo` 根目录中 `themes` 目录下
```
git clone https://github.com/wujun234/hexo-theme-tree.git  themes/tree
```

修改 `hexo` 根目录的 `_config.yml`
```
theme: tree
```
### 2 配置主题

- 如果要使用 `valine` 的评论及阅读量功能，需要在 `themes/tree` 路径下的 `_config.yml` 文件中，填写自己申请的 `leancloud` 账户下面的 `appID` 和 `appKey`

```
valine:
    appID: 
    appKey: 
```

若不需使用，则设置
```
valine:
    enableComment: false 
    enableCounter: false
```

- 如果要使用giscus评论系统，需要在themes/tree路径下的_config.yml，填写giscus配置
  配置页面：https://giscus.app/zh-CN
  若不需要，则设置
giscus:
    enable: false

### 3 导航栏和图标
- 导航栏：当前没有配置化，需要修改`themes/tree/layout/_partial` 路径下的 `header.ejs` 文件
- 图标：替换`themes/tree/source` 路径下的`favicon.ico` 文件

### 4 about 页
在 `source`路径下，与`_posts`文件夹平行，建立一个`about`页

执行
```
hexo new page --path about/index "About"
```
参考：https://hexo.io/zh-cn/docs/commands.html#new

### 5 文章树、目录树
页面左侧的文章树是根据 source 文件夹里的文章和文件夹生成的

修改主题 `tree` 目录的 `_config.yml`, `sidebar.usePostTitle`可以控制目录树中展示文件名还是文章名
```
# 左侧导航栏，用文件名还是文章名
sidebar:
  # usePostTitle 为 ture 用文章名，不填或为 false 用文件名
  usePostTitle: true
```

### 6 全站搜索
修改主题 `tree` 目录的 `_config.yml`

站点如果【被搜索引擎收录】，可以配置通过搜索引擎全站搜索
- searchEngine: 你选择的搜索引擎搜索 url，默认谷歌，例如"https://www.baidu.com/s?wd="、"https://www.google.com/search?q="
- homeHost: 你的域名，默认当前页面的域名

### 7 tags 页
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

### 8 categories 页
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

### 9 pjax
主题默认支持了 pjax 跳转，但是在网速慢的时候，pjax 因为没有页面刷新的交互，可能会让人误以为点击没响应。

如果要去掉 pjax 特性，注释掉主题 'source/js/main.js' 文件中的 'pjaxLoad()' 方法就好。

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
## 其他
### 图片
最开始将图片放在 source 中，使用 github 的相对地址，但是本地 md 编辑器不能识别这样的图片，

后续选择了 picgo，用 github 做图床：https://picgo.github.io/PicGo-Doc/

###  推荐插件
#### 1. 渲染器 hexo-renderer-markdown-it
- 步骤1：删除原渲染器
```
npm un hexo-renderer-marked --save
```
- 步骤2：安装 hexo-renderer-markdown-it
```
npm i hexo-renderer-markdown-it --save
```
- 步骤3：把下面代码加入根目录下的_config.yml
```
markdown:
  preset: "default"
  render:
    html: true
    xhtmlOut: false
    langPrefix: "language-"
    breaks: true
    linkify: true
    typographer: true
    quotes: "“”‘’"
  enable_rules:
  disable_rules:
  plugins:
    - markdown-it-abbr
    - markdown-it-cjk-breaks
    - markdown-it-deflist
    - markdown-it-emoji
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-mark
    - markdown-it-sub
    - markdown-it-sup
#    - markdown-it-checkbox    # 选项卡, 非自带，需安装
#    - markdown-it-imsize      # 图片大小, 非自带，需安装
#    - markdown-it-expandable  # 自动折叠, 非自带，需安装
  anchors:
    level: 2
    collisionSuffix: ""
    permalink: false
    permalinkClass: "header-anchor"
    permalinkSide: "left"
    permalinkSymbol: "¶"
    case: 0
    separator: "-"
```

- 自带功能

|名称  | 描述  | 语法  | 示例  |
|---|---|---|---|
| markdown-it-abbr  | 注释  | ``*[HTML]: 超文本标记语言``  | *[HTML]: 超文本标记语言  |
| markdown-it-emoji  | 表情  | ``:)``  | :)  |
| markdown-it-footnote|脚注|`参考文献[^脚注文本]`<br>`[^脚注文本]:脚注的内容`| 参考文献[^脚注1] |
| markdown-it-ins  |  下划线 | ``++下划线++``  | ++下划线++  |
| markdown-it-mark  | 突出显示  |``==标记==``   | ==标记==  |
| markdown-it-sub  | 下标  | ``H~2~O``  | H~2~O  |
| markdown-it-sup  | 上标  | ``X^2^``  | X^2^  |

[^脚注1]:脚注的内容 

#### 2. Mathjax公式
- 步骤1：安装 hexo-filter-mathjax
```
npm install hexo-filter-mathjax --save
```

- 步骤2：把下面代码加入根目录下的_config.yml
```
mathjax:
tags: none # or 'ams' or 'all'
single_dollars: true # enable single dollar signs as in-line math delimiters
cjk_width: 0.9 # relative CJK char width
normal_width: 0.6 # relative normal (monospace) width
append_css: true # add CSS to pages rendered by MathJax
every_page: false # if true, every page will be rendered by MathJax regardless the `mathjax` setting in Front-matter
packages: # extra packages to load
extension_options: {}
# you can put your extension options here
# see http://docs.mathjax.org/en/latest/options/input/tex.html#tex-extension-options for more detail
```

- 步骤3，在页面文件中设置mathjax: true
```
---
title: On the Electrodynamics of Moving Bodies
categories: Physics
date: 1905-06-30 12:00:00
mathjax: true
---
```

#### 3. Mermaid 流程图
支持流程图、时序图、饼图、状态图等十来种图形，详见[Mermaid官网](https://mermaid.js.org/syntax/flowchart.html) 

- 步骤1：安装`hexo-filter-mermaid-diagrams`
```
npm i hexo-filter-mermaid-diagrams --save
```

- 步骤2：修改Hexo配置文件，把下面代码加入根目录下的`_config.yml`
```
# mermaid chart
mermaid: ## mermaid url https://github.com/knsv/mermaid
  enable: true  # default true
  version: "9.3.0" # 当前版本
  options:  # find more api options from https://github.com/knsv/mermaid/blob/master/src/mermaidAPI.js
  #startOnload: true  // default true
```

- 步骤3：在页面文件中设置`mermaid: true`
```
---
title: Hexo支持流程图
date: 2023-02-03 13:04:06
tags: Markdown
mermaid: true
---
```

### 访问管理
我自己用的是百度统计 https://tongji.baidu.com ，很简单，注册后在 'head' 里加一个 '<script>' 块就行了
