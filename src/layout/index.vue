<template>
  <el-container>
    <el-header>{{ title }}</el-header>
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-main>
          <el-card>
            <div slot="header">
              <span>{{ pageName }}</span>
            </div>
            <router-view :key="key" />
          </el-card>
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
  data() {
    return {
      title: 'KAZI'
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    pageName() {
      return this.$route.meta.title
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
