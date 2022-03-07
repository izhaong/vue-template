/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-07 13:47:05
 * @LastEditTime: 2022-03-07 19:55:55
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import { Button, Loading, Empty } from 'vant'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'normalize.css'

const app = createApp(App)
app.use(createPinia()).use(router)
app.use(Button).use(Loading).use(Empty)
app.mount('#app')
