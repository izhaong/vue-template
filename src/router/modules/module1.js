/*
 * @Author: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Date: 2022-03-02 15:59:48
 * @LastEditTime: 2022-03-02 16:21:16
 * @LastEditors: ไปฒ็<izhaong@outlook.com>๐ถ๐ถ๐ถ
 * @Description:
 * @FilePath: /vue-template/src/router/modules/module1.js
 */
const module1 = {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../../views/About.vue')
}

export default module1
