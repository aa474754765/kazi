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
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'permission_routes',
      'device'
    ]),
    collapse() {
      return this.device === 'mobile'
    },
    menuItems() {
      return this.routes.filter(i => !i.hidden)
    },
    landingPath() {
      return this.$route.path
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
