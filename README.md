# 虚拟运动会前端

## Build Setup

``` bash
# 安装依赖
npm install

# 在实施导入之前需要先行安装相关的插件
npm install vue-cli -g
npm install vue-resource
npm install vue-router
npm install element-ui -S
npm install -g json-server 
npm install vue-json-excel 

# 服务运行端口localhost:8081
npm start

# 前端mock数据localhost:3000
npm run json-server

# 打包构建
npm run build
```

## 目录结构

``` bash
├───dist                    // 编译之后的项目文件，暂未生成
├───src                     // 开发目录
│   ├───api                 // api接口
│   ├───assets              // 静态资源
│   ├───components          // 组件
│   ├───pages               // 页面
│   ├───router              // 路由配置
│   ├───utils               // 工具库 
│   ├───App.vue             // 启动页面，最外层容器组件
│   └───main.js             // 入口脚本
├───babel.config.js         // babel 配置文件
├───vue.config.js           // vue 自定义配置，与 webpack 配置相关
├───package.json            // 项目配置
├───README.md               // 项目说明
```

## 后端调试接口步骤
```bash
1. `config/index.js` 修改proxyTable中的代理服务名和对应请求URL（如`'/lishaochenService'`）；

2. `utils/http.js` 修改axios的本地代理URL（如`baseURL: '/lishaochenService'`）；

3. `src/api/base.js` 修改各服务接口提供者的接口域名（如`searchAllMap: "/mapandevent/queryallmap",`）。
```