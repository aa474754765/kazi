<template>
  <div v-if="!realItem.hidden">
    <template v-if="hasChildren(realItem.children)">
      <el-submenu :index="realPath" :title="realItem.meta && realItem.meta.title">
        <template v-slot:title>
          <i :class="'el-icon-' + (realItem.meta && realItem.meta.icon || 'menu')"></i>
          <span v-if="!collapse">{{ realItem.meta && realItem.meta.title }}</span>
        </template>
        <sidebar-item v-for="child in realItem.children" :key="child.path" :item="child" :path="realPath"
          :collapse="collapse" :level="level + 1"></sidebar-item>
      </el-submenu>
    </template>
    <template v-else>
      <router-link class="router-link" :to="realPath" :title="realItem.meta && realItem.meta.title">
        <el-menu-item :index="realPath" :disabled="realItem.disabled">
          <i :class="'el-icon-' + (realItem.meta && realItem.meta.icon || 'menu')"></i>
          <template v-slot:title>
            <span>{{ realItem.meta && realItem.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    path: {
      type: String
    },
    collapse: {
      type: Boolean,
      default: true
    },
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    realItem() {
      let result = this.item
      // for the item with no children
      if (!this.item.meta && this.item.children && this.item.children.length === 1) {
        result = {
          ...this.item,
          ...this.item.children[0],
          path: `${this.item.path === '/' ? '' : this.item.path}/${this.item.children[0].path}`,
          children: []
        }
      }
      return result
    },
    realPath() {
      return !this.path ? this.realItem.path : `${this.path}/${this.realItem.path}`
    }
  },
  methods: {
    hasChildren(children = []) {
      return children.length > 0
    }
  }
}
</script>

<style scoped>
.router-link {
  text-decoration: none;
}

.el-menu-item {
  height: 38px;
  line-height: 38px;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 12px;
}
</style>
<style>
.el-submenu__title {
  height: 48px;
  line-height: 48px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.el-menu--collapse .el-submenu__title {
  text-overflow: unset;
}
</style>
