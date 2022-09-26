# wereader

## Introduction

**WxRead-PC-AutoReader** is a PC client for [微信读书](https://weread.qq.com).

### 升级通知

新版本正在研发中，请各位静待佳音，未来一个月内发布新的正式版应该问题不大。

就目前收集到的用户反馈内容，下面主要说下几个问题：

- 严重的：大部分用户都反馈了自动阅读概率性失效问题，但我挂机很久发现复现次数很低
    - 首先，应该是使用 setInterval 做滚动不大稳定
    - 其次，在网络状态不佳时，章节内容未加载完成时，极大概率会出现问题
    - 新版本将放弃使用 setInterval 做滚动，并注意测试网络状态的影响

- 一般的：很多人不看首页的说明，跑来问使用方法😂
    - 新版本会增加工具栏以增强可视化操作
    - 当然，快捷键是会继续保留的，考虑支持自定义
    - 极少数高端用户想要整本书读完时能对外开放一个GET/POST请求，我记住了

- 另外一个提及较多的：有部分网友仍在使用从书签栏启动的那个初版，希望我继续维护，我只能说还是放弃吧，限制太多了，要解决这些问题，还想要使用从书签栏启动的方式是不现实的

- 不考虑的：只有一个人提出要增加Text2Speech功能，说白了就是听书，我发现官方已经推出这个功能了，给绑个快捷键吧

- 反复重申的：
    - 登录是在微信读书首页的右上角，如果看不到请拉大窗口，一定会看到的！
    - 另外，这个是网页套壳，登录二维码是官方的，不会收集或者制造泄露任何用户信息的情况！我发4！


接下来说说目前新版本的计划：

- 放弃 Electron.js 做 Webview 的套壳，因为咱们就套一个微信读书网页端，用 Electron.js 太大材小用了，而且最重要的是打出来的包太大了。

- 按计划，新方案将改用 PyQt5 作为底层支持，目前项目已经启动，正处于技术验证阶段。

- 当前比较棘手的问题是，在 PyQt5 中 Python 与 JS 的交互策略较差，考虑使用 WebSocket 进行双方通信，有 QWebEngineView 这方面经验的朋友可以交流一下。

- 最后，开发不易，大大们小手一挥打赏一点碎银，给我点个外卖加个餐呀~

感谢 ❤️❤️❤️ 

新版本在即，欢迎大家继续留言讨论！


### 特性

- 控制自动阅读开关，随时暂停和继续
- 自动阅读的过程中，做笔记时自动暂停，做完笔记后自动恢复
- 自由切换日间和夜间模式
- 下次打开继续上次阅读页面
- 读完一本书将收到系统通知
- 全面使用快捷键，提升阅读体验
- 支持导出读书笔记功能，暂时仅支持导出`markdown`格式

## Architecture

- electron
- electron-store

## Commands / Scripts

-  Run `npm install -g electron` and `npm install` to install development environment.
-  Run `npm run start` to run **WeReader** with `electron`.
-  Run `npm run publish` to publish executable installers for Windows *(both x32 and x64)*.

## How to use

Details can be viewed on the home page of the software.
