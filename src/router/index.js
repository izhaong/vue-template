/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-01 20:16:52
 * @LastEditTime: 2022-03-02 16:36:40
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const modulesFiles = require.context('./modules', false, /\.js$/)
const valOfModules = modulesFiles.keys().map((modulePath) => {
  const value = modulesFiles(modulePath)
  return value.default
}, {})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...valOfModules
]

const router = new VueRouter({
  routes
})

export default router
