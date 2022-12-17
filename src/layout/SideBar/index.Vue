<template>
  <el-row>
    <el-col :span="24">
      <el-menu default-active="dashboard" class="nav-menu" :collapse="collapse" :collapse-transition="false">
        <sidebar-item v-for="item in menuItems" :key="item.path" :item="item" :collapse="collapse"/>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import SidebarItem from './SidebarItem'

const MOBILE_WIDTH = 768

export default {
  components: {
    SidebarItem
  },
  data () {
    return {
      collapse: false,
      routes: [
        {
          title: 'Dashboard',
          path: 'dashboard',
          icon: 'el-icon-s-data'
        },
        {
          title: 'Message Board',
          path: 'message_board',
          icon: 'el-icon-edit-outline'
        },
        {
          title: '小工具',
          path: '/tools',
          icon: 'el-icon-paperclip',
          children: [
            {
              title: 'path decode/encode',
              path: '/encode_decode',
              icon: 'el-icon-basketball',
              disabled: true
            },
            {
              title: '正则',
              path: '/regexp',
              icon: 'el-icon-football'
            }
          ]
        },
        {
          title: 'Element UI',
          path: '/element_ui',
          icon: 'el-icon-box',
          children: [
            {
              title: '动态表单',
              path: '/dynamic_forms',
              icon: ''
            }
          ]
        },
        {
          title: '有趣的',
          path: '/fun',
          icon: 'el-icon-truck',
          children: [
            {
              title: '日期',
              path: '/memory',
              icon: 'el-icon-timer'
            }
          ]
        }
      ]
    }
  },
  beforeMount () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  computed: {
    menuItems () {
      return this.routes.filter(i => !i.hidden)
    }
  },
  methods: {
    isMobile () {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < MOBILE_WIDTH
    },
    resizeHandler () {
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
