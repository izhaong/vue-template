/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-02 09:49:31
 * @LastEditTime: 2022-03-02 15:02:24
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/postcss.config.js
 */
module.exports = {
  plugins: {
    // 浏览器适配 将 px 单位转化为 vw/vh 单位。
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  }
}
