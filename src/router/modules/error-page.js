/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-03 16:57:58
 * @LastEditTime: 2022-03-03 17:00:27
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /tsl-ynpower-wxmini/src/router/modules/error-page.js
 */

import ParentView from '../../components/ParentView/index.vue'
export default {
  path: '/error',
  component: ParentView,
  redirect: 'noRedirect',
  name: 'ErrorPages',
  meta: {
    title: 'Error Pages',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/error-page/401'),
      name: 'Page401',
      meta: { title: '401', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/error-page/404'),
      name: 'Page404',
      meta: { title: '404', noCache: true }
    }
  ]
}
