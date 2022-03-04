/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-01 20:16:52
 * @LastEditTime: 2022-03-03 10:11:59
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/babel.config.js
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 指定样式路径
        style: (name) => `${name}/style/less`
      },
      'vant'
    ]
  ]

}
