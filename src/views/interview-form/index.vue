<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2024-08-19 23:09:16
 * @LastEditTime: 2024-08-20 18:07:06
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 面试题
 * @FilePath: \vue-template\src\views\interview-form\index.vue
-->
<template>
  <el-form :model="formData" :rules="rules" ref="questionForm" label-width="100px">
    <el-form-item label="问题类型" prop="questionType" required>
      <el-select v-model="formData.questionType" placeholder="请选择问题类型">
        <el-option :label="item.label" :value="item.value" v-for="(item, index) in questionOptions"
          :key="item.value || item.label || index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="问题题目" prop="questionTitle" required>
      <question-title-field v-model="formData.questionTitle" />
    </el-form-item>
    <el-form-item label="问题选项" prop="questionOptions">
      <question-options-field v-model="formData.questionOptions" @change="handleValidOptions" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('questionForm')">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { isNil, isEmpty, cloneDeep } from 'lodash'
import QuestionOptionsField from './components/QuestionOptionsField.vue'
import QuestionTitleField from './components/QuestionTitleField'
import { questionOptions, questionInitOption, languageOptions } from './data.js'
import { objValsHasNil } from '@/utils'
export default {
  components: { QuestionTitleField, QuestionOptionsField },
  data() {
    return {
      // 问题类型下拉选项 todo：远程字典加载方式
      questionOptions,
      formData: {
        /** 问题类型 */
        questionType: 1,
        /** 问题题目 */
        questionTitle: cloneDeep(questionInitOption),
        /** 问题选项 */
        questionOptions: []
      },

      rules: {
        questionType: [{ required: true, message: '请选择问题类型', trigger: 'change' }],
        questionTitle: [
          {
            validator: (rule, value, callback) => {
              languageOptions.forEach((item) => {
                if (isNil(value[item.value])) {
                  callback(new Error(`${item.label}不能为空`))
                }
              })
              callback()
            },
            trigger: 'blur'
          }
        ],
        questionOptions: [
          {
            type: 'array',
            required: true,
            validator: (rule, value, callback) => {
              if (isEmpty(value)) {
                callback(new Error('问题选项不能为空'))
              } else if (objValsHasNil(value)) {
                callback(new Error('请填入选项内容'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit...', this.formData)
          const h = this.$createElement
          this.$msgbox({
            title: '表单数据,(不清楚细节需求，建议把题目期望结果放出来,thx)',
            message: h('p', null, [h('pre', { style: 'color: white;backgroundColor: black;white-space: pre-wrap' }, JSON.stringify(this.formData))])
          })
        } else {
          console.log('error submit!!', this.formData)
          return false
        }
      })
    },
    handleValidOptions() {
      this.$nextTick(() => {
        this.$refs.questionForm.validateField('questionOptions')
      })
    }
  }
}
</script>
