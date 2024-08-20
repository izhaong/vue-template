
// 问题类型选项
export const questionOptions = [
  { label: '单选', value: 1 },
  { label: '多选', value: 2 }
]
// 语言枚举
export const languageOptions = [
  { label: '中文', value: 'zh' },
  { label: '英文', value: 'en' },
  { label: '印尼文', value: 'id' },
  { label: '墨西哥', value: 'es-mx' }
]

// 多语言占位符
export const langPlaceholder = {
  zh: '请输入题目',
  en: 'Please enter a title',
  id: 'Silakan masukkan pertanyaan',
  'es-mx': 'mo xi mo xi ~'
}

// 问题题目和问题选项item的初始化值
export const questionInitOption = {
  zh: null,
  en: null,
  id: null,
  'es-mx': null
}

// 默认聚焦tab
export const DEF_TAB = 'zh'
