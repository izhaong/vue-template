/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-02 16:03:59
 * @LastEditTime: 2022-03-02 16:19:51
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/src/utils/fs.js
 */

/**
 * @description:
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {*} directory
 * @param {*} useSubdirectories
 * @param {*} regExp 正则
 * @param {*} mode 默认同步
 * @return {*}
 */
export const getRequireContext = (directory, useSubdirectories = true, regExp = /^\.\/.*$/, mode = 'sync') => {
  const modulesFiles = require.context(directory, useSubdirectories, regExp, mode)
  const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
  }, {})
  return modules
}
