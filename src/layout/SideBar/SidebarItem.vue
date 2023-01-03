<template>
  <div v-if="!item.hidden">
    <template v-if="hasChildren(item.children)">
      <el-submenu :index="realPath">
        <template v-slot:title>
          <i :class="'el-icon-' + item.icon || 'menu'"></i>
          <span v-if="!collapse">{{ item.title }}</span>
        </template>
        <sidebar-item v-for="child in itemChildren(item.children)" :key="child.path" :item="child" :path="realPath"
          :collapse="collapse"></sidebar-item>
      </el-submenu>
    </template>
    <template v-else>
      <router-link class="router-link" :to="realPath">
        <el-menu-item :index="realPath" :disabled="item.disabled">
          <i :class="'el-icon-' + item.icon || 'menu'"></i>
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
    path: {
      type: String
    },
    collapse: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    realPath() {
      return !this.path ? this.item.path : `${this.path}/${this.item.path}`
    }
  },
  methods: {
    itemChildren(children = []) {
      return children.filter(i => !i.hidden)
    },
    hasChildren(children = []) {
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
