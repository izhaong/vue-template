/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-02 17:28:35
 * @LastEditTime: 2022-03-02 17:28:35
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /vue-template/commitlint.config.js
 */
module.exports = {
  extends: ['@commitlint/config-conventional'], // 集成规则
  // 定义规则 会覆盖集成规则
  roles: {
    // type 的类型定义：表示 git 提交的 type 必须在以下类型范围之内
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下进行验证
      'always',
      // 泛型内容
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'WIP']
    ],
    // 大小写不做校验
    'subject-case': [0]
  }
}
