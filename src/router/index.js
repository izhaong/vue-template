/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-01 20:16:52
 * @LastEditTime: 2024-08-19 23:54:28
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: \vue-template\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultLayout from '@/layout/default.vue'
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
    redirect: '/interview-form',
    component: defaultLayout,
    children: [
      ...modules
    ]
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
