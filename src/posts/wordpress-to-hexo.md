---
title: 博客搬迁记 - 从WordPress到Hexo
tags: [Hexo,WordPress,Gitcafe]
date: 2015-05-13 09:50:02
description: 博客从WordPress搬迁到Hexo，gitcafe部署
---

今天早上打开电脑第一件事就是把pages绑定了域名，从此便可以使用`http://imys.net`进行访问了。

至此已经折腾的差不多了，在此记录下搬迁过程中遇到的一些问题及解决办法。
<!--more-->


## Hexo3本地部署

现在node下安装的hexo一般都是最新版本，网上搜索到的一些教程不乏是老版本的，要特别留意。

### 参考

+ [用Hexo 3 搭建github blog](http://forsweet.github.io/2015/04/20/%E7%94%A8Hexo%E6%90%AD%E5%BB%BAGithub%E5%8D%9A%E5%AE%A2/)
+ [Hexo 3.0 静态博客使用指南](http://www.jianshu.com/p/73779eacb494)

以上两篇文章应该能使你顺利的在`http://localhost:4000/`看到自己的新博客，并且你也熟悉了Hexo的常用命令。

### Hexo无法解析模板文件

本地预览页面显示：

```
<%- partial('_partial/head') %>
<%- partial('_partial/header') %>
<%- body %>
<% if (theme.sidebar && theme.sidebar !== 'bottom'){ %> <%- partial('_partial/sidebar') %> <% } %>
<%- partial('_partial/footer') %>
<%- partial('_partial/mobile-nav') %> <%- partial('_partial/after-footer') %>
```

在工程目录执行下面3个命令，高版本的hexo移除默认的ejs。

```bash
$ npm install hexo-renderer-ejs --save
$ npm install hexo-renderer-stylus --save
$ npm install hexo-renderer-marked --save
```

## 上传到GitCafe

+ [注册GitCafe创建Page项目](http://www.sumrday.com/2014/09-18-Hello-Hexo.html)
+ [安装和设置 Git](https://gitcafe.com/GitCafe/Help/wiki/%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85%E5%92%8C%E8%AE%BE%E7%BD%AE%20Git)

以上两篇内容结合着看，不过对第一次操作这些的人来说可能会遇到一些问题。

### 生成SSH

当命令窗口出现以下信息时，需要你输入`passphrase`口令。不过在我操作时输入口令的话是无法生成成功的，直接按`enter`即可。

```
Enter passphrase (empty for no passphrase):
```

### 设置git

第一次在本地设置git时，需设置用户标识。

```bash
$ git config --global user.name "yourname"                   # gitcafe上的用户名
$ git config --global user.email "yourmaill@yourmaili.com"   # 填写自己的邮箱
```

### 设置本地gitcafe-pages版本库

1. GitBash进入本地Hexo目录
2. `git checkout -b gitcafe-pages` 创建Gitcafe-Pages分支，并切换到该分支。
3. `git add .` （.）点表示当前目录下的所有内容，交给git管理，也就是提交到了git的本地仓库。

### 上传到gitcafe

**修改hexo配置文件，即config.yml，如下配置：**

```yml
deploy:
    type: git
    repository: git@gitcafe.com:yourname/yourname.git
    branch: gitcafe-pages
```

yourname 修改成你的用户名，如我的是：`git@gitcafe.com:justgo/justgo.git`

保存后直接在**GitBash**中`hexo g && hexo d`上传即可（我在这一步折腾了很久，在cmd下运行`hexo d`命令会出错）。

稍等片刻，打开 `http://youname/gitcafe.io` 便可以看到自己的博客了。

## WordPress文章迁移

WordPress 后台可以直接导出wordpress.xml文件，把这个文件放入你的本地Hexo目录下，然后安装一个插件可以直接生成每篇文章的Markdown文件。

```bash
npm install hexo-migrator-wordpress --save    # 安装插件

hexo migrate wordpress wordpress.xml          # 生成Markdown
```

生成后的文件稍微修改一下格式就可以上传了。

庆幸的是我博客里的图片不多，不需要太多的链接修改。

不过以后我也开始使用七牛存储了，免得以后搬迁麻烦。

## Hexo配置优化

### 参考

+ [hexo博客的配置、使用](http://zipperary.com/2013/05/29/hexo-guide-3/)
+ [hexo博客的优化技巧](http://zipperary.com/2013/05/30/hexo-guide-4/)
+ [hexo博客的优化技巧续](http://zipperary.com/2013/06/02/hexo-guide-5/)
+ [Hexo 优化与定制(一)](http://lukang.me/2014/optimization-of-hexo.html)
+ [Hexo 优化与定制(二)](http://lukang.me/2015/optimization-of-hexo-2.html)

### 无法开启RSS和sitemap

打开`http://localhost:4000/atom.xml` 页面显示 `Cannot GET atom.xml`，`http://localhost:4000/sitemap.xml` 页面显示 `Cannot GET sitemap.xml`。

这个问题困扰了我很长的时间，因为我的插件安装和配置都是照着[示例](http://hexo.io/plugins/)分毫不差的进行的，可是google了几个小时都没解决！

插件也重装更新了几次，想过重新初始化Hexo，怕会丢失原来的一些配置，最后在 `hexo/package.json` 中找到了原因。

package.json：

```json
{
    "name": "hexo-site",
    "version": "0.0.0",
    "private": true,
    "hexo": {
    "version": "3.0.1"
    },
    "dependencies": {
    "hexo": "^3.0.0",
    "hexo-admin": "^0.3.0",
    "hexo-deployer-git": "0.0.4",
    "hexo-generator-archive": "^0.1.0",
    "hexo-generator-category": "^0.1.0",
    "hexo-generator-index": "^0.1.0",
    "hexo-generator-tag": "^0.1.0",
    "hexo-generator-feed": "^1.0.1",
    "hexo-generator-sitemap": "^1.0.1",
    "hexo-migrator-wordpress": "^0.1.2",
    "hexo-renderer-ejs": "^0.1.0",
    "hexo-renderer-marked": "^0.2.4",
    "hexo-renderer-stylus": "^0.2.0",
    "hexo-server": "^0.1.2"
    }
}
```

检查此文件中是否包括了`hexo-generator-tag`和`hexo-generator-sitemap`，没有的话添加一下。
插件版本号查看对应插件下的`package.json`文件，其他插件的类似问题应该也可以尝试这样解决。
