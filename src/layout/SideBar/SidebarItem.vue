<template>
  <div v-if="!item.hidden">
    <template v-if="hasChildren(item.children)">
      <el-submenu :index="item.path">
        <template v-slot:title>
          <i :class="item.icon || 'el-icon-menu'"></i>
          <span v-if="!collapse">{{ item.title }}</span>
        </template>
        <sidebar-item v-for="child in itemChildren(item.children)" :key="child.path" :item="child"></sidebar-item>
      </el-submenu>
    </template>
    <template v-else>
      <router-link class="router-link" :to="item.path">
        <el-menu-item :index="item.path" :disabled="item.disabled">
          <i :class="item.icon || 'el-icon-menu'"></i>
          <template v-slot:title>
            <span>{{ item.title }}</span>
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
    collapse: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    itemChildren (children = []) {
      return children.filter(i => !i.hidden)
    },
    hasChildren (children = []) {
      return children.filter(i => !i.hidden).length > 0
    }
  }
}
</script>

<style scoped>
  .router-link {
    text-decoration: none;
  }
</style>
