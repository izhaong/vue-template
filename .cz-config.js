/*
 * @Author: ä»²ç<izhaong@outlook.com>ð¶ð¶ð¶
 * @Date: 2022-03-02 17:26:57
 * @LastEditTime: 2022-03-02 17:26:57
 * @LastEditors: ä»²ç<izhaong@outlook.com>ð¶ð¶ð¶
 * @Description: 
 * @FilePath: /vue-template/.cz-config.js
 */
module.exports = {
  types: [
    { value: 'feat', name: 'feat:     æ°åè½' },
    { value: 'fix', name: 'fix:      éè¯¯ä¿®å¤' },
    { value: 'docs', name: 'docs:     ä»ææ¡£æ´æ¹' },
    {
      value: 'style',
      name: 'style:    ä¸å½±åä»£ç å«ä¹çæ´æ¹\n            (ç©ºæ ¼ãæ ¼å¼ãç¼ºå°åå·ç­)'
    },
    {
      value: 'refactor',
      name: 'refactor: æ¢ä¸ä¿®å¤ Bug ä¹ä¸æ·»å åè½çä»£ç æ´æ¹'
    },
    {
      value: 'perf',
      name: 'perf:     æé«æ§è½çä»£ç æ´æ¹'
    },
    { value: 'test', name: 'test:     æ·»å ç¼ºå°çæµè¯' },
    {
      value: 'chore',
      name: 'chore:    å¯¹çæè¿ç¨æè¾å©å·¥å·çæ´æ¹\n            ååºï¼å¦ææ¡£çæ'
    },
    { value: 'revert', name: 'revert:   è¿åå°æäº¤' },
    { value: 'WIP', name: 'WIP:      è¿è¡ä¸­å·¥ä½' }
  ],
  messages: {
    type: "éæ©è¦æäº¤çæ´æ¹ç±»å:",
    scope: '\nè¡¨ç¤ºæ­¤æ´æ¹çèå´(å¯é):',
    // used if allowCustomScopes is true
    customScope: 'è¡¨ç¤ºæ­¤æ´æ¹çèå´:',
    subject: 'åä¸ä¸ªç®ç­ç, å½ä»¤å¼çæ´æ¹æ¶ææè¿°:\n',
    body: 'æä¾æ´æ¹çè¾é¿æè¿°(å¯é)ãä½¿ç¨"|"æ¢è¡:\n',
    breaking: 'ååºææéå¤§æ´æ¹(å¯é):\n',
    footer: 'ååºæ­¤æ´æ¹è§£å³çä»»ä½é®é¢(å¯é)ãä¾å¦:31ã#34:\n',
    confirmCommit: 'æ¯å¦ç¡®å®è¦ç»§ç»­æ§è¡ä¸è¿°æäº¤?'
  }
}
