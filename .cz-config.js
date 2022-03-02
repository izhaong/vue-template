/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-03-02 17:26:57
 * @LastEditTime: 2022-03-02 17:26:57
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 
 * @FilePath: /vue-template/.cz-config.js
 */
module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      错误修复' },
    { value: 'docs', name: 'docs:     仅文档更改' },
    {
      value: 'style',
      name: 'style:    不影响代码含义的更改\n            (空格、格式、缺少分号等)'
    },
    {
      value: 'refactor',
      name: 'refactor: 既不修复 Bug 也不添加功能的代码更改'
    },
    {
      value: 'perf',
      name: 'perf:     提高性能的代码更改'
    },
    { value: 'test', name: 'test:     添加缺少的测试' },
    {
      value: 'chore',
      name: 'chore:    对生成过程或辅助工具的更改\n            和库，如文档生成'
    },
    { value: 'revert', name: 'revert:   还原到提交' },
    { value: 'WIP', name: 'WIP:      进行中工作' }
  ],
  messages: {
    type: "选择要提交的更改类型:",
    scope: '\n表示此更改的范围(可选):',
    // used if allowCustomScopes is true
    customScope: '表示此更改的范围:',
    subject: '写一个简短的, 命令式的更改时态描述:\n',
    body: '提供更改的较长描述(可选)。使用"|"换行:\n',
    breaking: '列出所有重大更改(可选):\n',
    footer: '列出此更改解决的任何问题(可选)。例如:31、#34:\n',
    confirmCommit: '是否确实要继续执行上述提交?'
  }
}
