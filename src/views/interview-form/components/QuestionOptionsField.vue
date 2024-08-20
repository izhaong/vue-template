<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2024-08-20 12:17:59
 * @LastEditTime: 2024-08-20 17:24:12
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: \vue-template\src\views\interview-form\components\QuestionOptionsField.vue
-->
<template>
  <el-row>
    <el-col :span="24" v-for="(opt, idx) in questionOptionsValue" :key="opt.value || idx" class="mb-2">
      <div v-if="!opt.show" class="w-full flex justify-between">
        <span class="flex-1 truncate pr-2">{{ opt.content['zh'] }}</span>
        <span><el-button type="primary" size="mini" @click="opt.show = true">编辑</el-button>
          <el-popconfirm :title="`确定删除${opt.content['zh']}吗？`"
            @confirm="questionOptionsValue.splice(idx, 1); $emit('change', questionOptionsValue)">
            <el-button slot="reference" type="danger" size="mini">删除</el-button>
          </el-popconfirm>
        </span>
      </div>
      <question-title-field v-model="opt.contentClone" v-else>
        <div slot="handler" class="text-right mt-2">
          <el-button size="mini" class="mr-2" plain @click="opt.show = false">取消</el-button>
          <el-button type="primary" size="mini" @click="handleEdit(opt)">确定</el-button>
        </div>
      </question-title-field>
    </el-col>
    <el-col>
      <div v-if="!createComp.show">
        <el-button plain size="mini" class="w-full" icon="el-icon-plus" @click="createComp.show = true">添加</el-button>
      </div>
      <question-title-field v-else v-model="createComp.content">
        <div slot="handler" class="text-right mt-2">
          <el-button size="mini" plain @click="handleCancelItem">取消</el-button>
          <el-button type="primary" size="mini" @click="handleAddItem">确定</el-button>
        </div>
      </question-title-field>
    </el-col>
  </el-row>
</template>

<script>
import { cloneDeep, isNil } from 'lodash'
import { questionInitOption, languageOptions, DEF_TAB } from '../data.js'
import QuestionTitleField from './QuestionTitleField'
export default {
  props: {
    value: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      currentTab: DEF_TAB,
      createComp: {
        show: false,
        activeTab: DEF_TAB,
        content: cloneDeep(questionInitOption),
        contentClone: cloneDeep(questionInitOption)
      },
      questionOptionsValue: this.value.map((v) => ({ content: v, lang: DEF_TAB, show: false, contentClone: v }))
    }
  },
  components: { QuestionTitleField },
  watch: {
    // 谨慎操作：统一处理 数据逆向处理
    questionOptionsValue: {
      handler(value) {
        this.$emit(
          'input',
          value.map((v) => v.content)
        )
      },
      deep: true
    }
  },
  methods: {
    handleAddItem() {
      const content = this.createComp.content
      const len = Object.keys(content).length
      for (let i = 0; i < len; i++) {
        const key = Object.keys(content)[i]
        const value = content[key]
        if (isNil(value)) {
          const { label } = languageOptions.find(item => item.value === key)
          return this.$message.error(`请输入${label}选项内容`)
        }
      }
      /** 做状态管理 */
      this.questionOptionsValue.push(
        cloneDeep({ content: cloneDeep(content), contentClone: cloneDeep(content), show: false, lang: this.createComp.activeTab })
      )
      this.$emit('change', this.questionOptionsValue)
      this.createComp.content = cloneDeep(questionInitOption)
      this.createComp.show = false
    },
    handleCancelItem() {
      this.createComp.content = cloneDeep(questionInitOption)
      this.createComp.show = false
    },
    handleEdit(opt) {
      opt.content = cloneDeep(opt.contentClone)
      opt.show = false
    }
  }
}
</script>
