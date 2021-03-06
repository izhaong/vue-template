/*
 * @Author: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Date: 2022-03-01 20:16:52
 * @LastEditTime: 2022-03-04 09:51:44
 * @LastEditors: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Description:
 * @FilePath: /vue-template/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().map((modulePath) => {
  const value = modulesFiles(modulePath)
  return value.default
}, {})

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...modules
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
