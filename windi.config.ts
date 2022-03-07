/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-07 14:11:41
 * @LastEditTime: 2022-03-07 14:13:08
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/windi.config.ts
 */

// https://windicss.org/integrations/vite.html

import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  safelist: '', // 解决运行时决定的实用程序无法有效匹配
  alias: {}
})
