<template>
  <el-container direction="vertical" :class="{ 'full-content-screen': fullSrceen }">
    <page-header v-if="!fullSrceen"></page-header>
    <el-container>
      <el-aside v-if="!fullSrceen" :width="device === 'mobile' ? '64px' : '200px'">
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
      <exit-fullscreen v-if="fullSrceen"></exit-fullscreen>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { i18nTitle } from '@/router/utils'
import ResizeHandler from './ResizeHandler'
import SideBar from './SideBar'
import PageHeader from './Header'
import ExitFullscreen from './ExitFullscreen'

export default {
  name: 'Layout',
  components: { SideBar, PageHeader, ExitFullscreen },
  mixins: [ResizeHandler],
  data() {
    return {
      title: 'KAZI'
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'fullSrceen'
    ]),
    key() {
      return this.$route.path
    },
    pageName() {
      return i18nTitle.call(this, this.$route, this.$route.meta.title)
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

.full-content-screen .main-contaner {
  max-height: 100vh;
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
