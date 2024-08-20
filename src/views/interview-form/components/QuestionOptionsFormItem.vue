<template>
  <el-row>
    <el-col :span="24" v-for="(opt, idx) in questionOptionsValue" :key="opt.value || idx" class="mb-2">
      <div v-if="!opt.show" class="w-full flex justify-between">
        <span class="flex-1 truncate pr-2">{{ opt.content['zh'] }}</span>
        <span><el-button type="primary" size="mini" @click="opt.show = true">编辑</el-button>
          <el-popconfirm :title="`确定删除${opt.content['zh']}吗？`" @confirm="questionOptionsValue.splice(idx, 1)">
            <el-button slot="reference" type="danger" size="mini">删除</el-button>
          </el-popconfirm>
        </span>
      </div>
      <question-title-form-item v-model="opt.contentClone" v-else>
        <div slot="handler" class="text-right mt-2">
          <el-button size="mini" class="mr-2" plain @click="opt.show = false">取消</el-button>
          <el-button type="primary" size="mini" @click="
            opt.content = opt.contentClone
          opt.show = false
            ">确定</el-button>
        </div>
      </question-title-form-item>
    </el-col>
    <el-col>
      <div v-if="!createComp.show">
        <el-button plain size="mini" class="w-full" icon="el-icon-plus" @click="createComp.show = true">添加</el-button>
      </div>
      <question-title-form-item v-else v-model="createComp.content">
        <div slot="handler" class="text-right mt-2">
          <el-button size="mini" plain @click="handleCancelItem">取消</el-button>
          <el-button type="primary" size="mini" @click="handleAddItem">确定</el-button>
        </div>
      </question-title-form-item>
    </el-col>
  </el-row>
</template>

<script>
import { cloneDeep } from 'lodash'
import { questionInitOption, DEF_TAB } from '../data.js'
import { objValsHasNil } from '@/utils'
import QuestionTitleFormItem from './QuestionTitleFormItem'
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
  components: { QuestionTitleFormItem },

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
      if (objValsHasNil(this.createComp.content)) {
        return this.$message.error('需要每个选项卡都有内容')
      }
      /** 做状态管理 */
      this.questionOptionsValue.push(
        cloneDeep({ content: cloneDeep(this.createComp.content), contentClone: cloneDeep(this.createComp.content), show: false, lang: this.createComp.activeTab })
      )
      this.createComp.content = cloneDeep(questionInitOption)
      this.createComp.show = false
    },
    handleCancelItem() {
      this.createComp.content = cloneDeep(questionInitOption)
      this.createComp.show = false
    }
  }
}
</script>
