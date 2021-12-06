# 目录结构

```
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

您可以根据业务需求改动目录结构  
譬如本 demo 就在根目录下新增了 `docs/`（文档）与 `mock/`（Mock 服务器）

***

上述目录结构中，需要注意的是 `src/components/` 与 `src/pages/` 的区别  
不妨把本 demo 中的这两个目录以树状形式展开：

```
src/components/                     # 组件
    └── Menu.vue                    # 导航栏

src/pages/                          # 路由页面组件
    ├── Home.vue                    # 首页
    ├── Registry.vue                # 用户注册模块
    ├── Running.vue                 # 比赛页
    └── queryGameScore/             # 查询模块
        ├── QueryGameScore.vue      # 对应 /queryGameScore（记录查询首页）
        └── PlayerDetail.vue        # 对应 /playerDetail:id（详细信息列表）
```

根据注释，我们大概知道了二者的差别：

#### `src/components/`
* 主要是全局性的，或通用性很强的组件，具备良好的封装性
* 一般不会涉及到具体的业务逻辑

#### `src/pages/`
* 主要是业务性的页面组件，基本不具备通用性
* 基本与路由一一对应（例如 `/src/pages/Running.vue` 对应着路由 `/running`）

> 若多个功能模块通用的，则建议移到全局，即 `src/components/`
