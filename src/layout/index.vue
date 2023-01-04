<template>
  <el-container>
    <el-header>{{ title }}</el-header>
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-main v-if="!fullScreen">
          <el-card>
            <div slot="header">
              <span style="margin-right:16px">{{ pageName }}</span>
              <span v-html="subTitle"></span>
            </div>
            <router-view :key="key" />
          </el-card>
        </el-main>
        <router-view v-else :key="key" />
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
    },
    subTitle() {
      return this.$route.meta.subTitle
    },
    fullScreen() {
      return this.$route.meta.full
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
