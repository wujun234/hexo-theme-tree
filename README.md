## Hexo 主题 Tree

一个简洁的主题，主要功能是 “树状导航” + “树状目录”，可选配“评论”和“阅读量”功能

Demo：[wujun234.github.io](wujun234.github.io)

![](Tree.png)

## 使用说明

### 下载主题

下载主题到 `hexo` 根目录中 `themes` 目录下
```
git clone https://github.com/wujun234/hexo-theme-tree.git  themes/tree
```

修改 `hexo` 根目录的 `_config.yml`
```
theme: tree
```
### 配置主题

如果要使用 `valine` 的评论及阅读量功能，需要在 `themes/tree` 路径下的 `_config.yml` 文件中，填写自己申请的 `leancloud` 账户下面的 `appID` 和 `appKey`

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

### 推荐插件

推荐安装 [Markdown-it](https://github.com/markdown-it/markdown-it) 插件渲染 `Markdown`
