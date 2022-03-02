/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-01 20:16:52
 * @LastEditTime: 2022-03-02 10:39:13
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './plugins/axios'
// import './plugins/dayjs'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
