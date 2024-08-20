<template>
  <el-container>
    <el-main class="form_wrapper">
      <main-theme-tools />
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import MainThemeTools from '@/components/main-theme-tools'
export default {
  components: { MainThemeTools }
}
</script>
<style scoped lang="scss">
.form_wrapper {
  max-width: 600px;
  margin: 0 auto;
}
</style>
