<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2024-08-19 23:50:11
 * @LastEditTime: 2024-08-20 18:37:04
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: \vue-template\src\layout\default.vue
-->
<template>
  <el-container class="default_layout_container">
    <el-header>Header</el-header>
    <el-main class="main">
      <router-view></router-view>
      <main-theme-tools />

    </el-main>
    <el-footer class="default_layout_footer">
      <el-link type="primary" @click="handleClick">仲灏知识库：https://izhaong.com</el-link>&nbsp;
      <el-link type="primary" target="_blank" href="https://izhaong.com:5001">仲灏云台：https://izhaong.com:5001</el-link>
    </el-footer>
  </el-container>
</template>
<script>
import MainThemeTools from '@/components/main-theme-tools'
export default {
  components: { MainThemeTools },
  methods: {
    handleClick() {
      window.open('https://izhaong.com', '仲灏知识库', 'toolbar=no,screenX=99999,screenY=9999,width=400,height=800')
    }
  }
}
</script>
<style scoped lang="scss">
.main {
  max-width: 600px;
  margin: 0 auto;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.default_layout_container {
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto 60px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
