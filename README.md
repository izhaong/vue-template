# vue-cli-pro2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


**用于团队初始开发时统一编码规范**

主要有如下功能点

- 针对不同编辑器生效
- vocde 在项目打开时会有提示安装推荐插件（ 在你没有安装 eslint，vetur 等 ）
- 对 vscode 编辑器配置做团队统一规范，对诸多忽略文件（夹）做了处理
- 对 git 前端项目做了诸多忽略文件（夹）处理
- 对 eslint 做了诸多忽略文件（夹）处理
- 对 prettier 做了诸多忽略文件（夹）处理
- 兼容了 eslint 与 prettier 编码规范


## 依赖

- 🚀 vue3.2 + vite + typescript + pinia + axios + vant
- 💪 使用 vue3.2 `<script setup>` 语法糖
- 💪 使用 TypeScript
- 🍭 支持 jsx 组件写法
- 🍭 整合 vant ui、less
- 🍭 使用 viewport 移动端方案
- 🍭 使用 pinia 替代 vuex，更简单、更高效