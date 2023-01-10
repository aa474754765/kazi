<template>
  <el-container direction="vertical">
    <page-header></page-header>
    <el-container>
      <el-aside :width="device === 'mobile' ? '64px' : '200px'">
        <side-bar></side-bar>
      </el-aside>
      <el-container class="main-contaner">
        <el-main v-if="!fullScreen">
          <el-card>
            <div slot="header">
              <span style="margin-right:16px">{{ pageName }}</span>
              <span v-html="subTitle"></span>
            </div>
            <router-view :key="key" />
          </el-card>
        </el-main>
        <el-main class="no-padding" v-else>
          <router-view :key="key" />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ResizeHandler from './ResizeHandler'
import SideBar from './SideBar'
import PageHeader from './Header'

export default {
  name: 'Layout',
  components: { SideBar, PageHeader },
  mixins: [ResizeHandler],
  data() {
    return {
      title: 'KAZI'
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ]),
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

.main-contaner {
  max-height: calc(100vh - #{$headerHeight});
}

.el-main {
  background-color: $pageColor;
}

.el-aside {
  height: calc(100vh - #{$headerHeight});
  background-color: $sideBarColor;
  overflow-x: hidden;
}

.no-padding {
  padding: 0;
  width: 100%;
  height: calc(100vh - #{$headerHeight});
}
</style>
