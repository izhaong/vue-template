/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-01 20:16:52
 * @LastEditTime: 2024-08-19 23:38:29
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: \vue-template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/element-ui/theme/index.css'
import '@/assets/scss/aui.scss'
// plugins
import './plugins/axios'
import './plugins/dayjs'

// styles
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.less' // global css
import 'windi.css'

// install
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
