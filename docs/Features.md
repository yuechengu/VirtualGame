# 技术栈

* [Vue 2.x](https://github.com/vuejs/vue/tree/2.6)
* [Vue Router 3.0.x](https://github.com/vuejs/vue-router/tree/v3.0.1)
* [Webpack 1.x](http://webpack.github.io/docs/)（辅以 [Gulp](http://gulpjs.com/)）
* [element-ui 2.x](https://element.eleme.cn/#/zh-CN) (UI)
* ES6 + [Babel](http://babeljs.io/) + [ESLint 1.x](http://eslint.org/)（代码检查，待使用）
* [BrowserSync](https://github.com/BrowserSync/browser-sync)（多端调试，待使用）
* [Express 4.x](http://expressjs.com/)（提供开发热更替与静态资源服务器，待使用）

> #### 注意：
（mock所用技术栈下次比赛再使用）
> `package.json` 的 `dependencies` 中的：  
> * [`lowdb`](https://github.com/typicode/lowdb)
> * [`uuid`](https://github.com/kelektiv/node-uuid)
> * [`tiny-express`](https://github.com/kenberkeley/tiny-express)
> 
> 仅为留言板 Mock 服务器所需。同样地，`devDependencies` 中的：  
> * [`gitbook-cli`](https://github.com/GitbookIO/gitbook-cli)
> 
> 仅为文档撰写所需  
> 往后的开发中，可以删掉：
> * 上述四个依赖
> * `docs/` 与 `mock/` 目录
> * `src/services/xhr/index.js` 中的 Mock Server 相关代码