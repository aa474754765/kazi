<template>
  <el-container>
    <el-header>{{ title }}</el-header>
    <el-container>
      <el-aside width="auto">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-main>
          <router-view :key="key" />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './SideBar'

export default {
  name: 'Layout',
  components: { SideBar },
  data () {
    return {
      title: 'KAZI'
    }
  },
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/variables.scss";

.el-header {
  background-color: cornflowerblue;
  text-align: center;
  line-height: 60px;
  height: $headerHeight;
}

.el-aside {
  min-height: calc(100vh - #{$headerHeight});
  background-color: $sideBarColor;
}
</style>
