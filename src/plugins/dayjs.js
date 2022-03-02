/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-01 20:33:10
 * @LastEditTime: 2022-03-01 20:36:28
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 
 * @FilePath: /vue-template/src/plugins/dayjs.js
 */
import Vue from 'vue'
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

Vue.prototype.$day = dayjs
