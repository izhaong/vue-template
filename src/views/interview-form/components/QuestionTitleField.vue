<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2024-08-20 13:03:40
 * @LastEditTime: 2024-08-20 17:14:34
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: \vue-template\src\views\interview-form\components\QuestionTitleFormItem.vue
-->
<template>
  <el-tabs type="border-card" v-model="currentTab">
    <el-tab-pane v-for="(tab, idx) in languageOptions" :label="tab.label" :name="tab.value"
      :key="tab.value || tab.label || idx">
      <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8 }" :placeholder="langPlaceholder[currentTab]"
        v-model="questionTitle[currentTab]"></el-input>
    </el-tab-pane>
    <slot name="handler"></slot>
  </el-tabs>
</template>

<script>
import { cloneDeep } from 'lodash'
import { languageOptions, langPlaceholder, questionInitOption, DEF_TAB } from '../data.js'

export default {
  props: {
    value: {
      type: Object,
      default: () => cloneDeep(questionInitOption)
    }
  },
  data() {
    return {
      langPlaceholder,
      languageOptions,
      currentTab: DEF_TAB
    }
  },
  computed: {
    questionTitle: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
