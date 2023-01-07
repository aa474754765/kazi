<template>
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="landingPath" class="nav-menu" :collapse="collapse" :collapse-transition="false">
        <sidebar-item v-for="item in permission_routes" :key="item.path" :item="item" :collapse="collapse" />
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

const MOBILE_WIDTH = 768

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      collapse: false
    }
  },
  beforeMount() {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    menuItems() {
      return this.routes.filter(i => !i.hidden)
    },
    landingPath() {
      return this.$route.path
    }
  },
  methods: {
    isMobile() {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < MOBILE_WIDTH
    },
    resizeHandler() {
      this.collapse = this.isMobile()
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/variables.scss";

.nav-menu {
  background-color: $sideBarColor;
}
</style>
