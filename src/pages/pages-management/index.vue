<template>
  <div>
    <el-tag>为每个角色分配不同的页面权限吧！</el-tag>
    <el-row :gutter="32">
      <el-col :span="6">
        <el-select :span="12" v-model="selectedRole" placeholder="请选择角色" @change="changeRole">
          <el-option v-for="item in roles" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
        <el-button size="small" type="primary" plain @click="save">保存</el-button>
      </el-col>
      <el-col :span="18">
        <el-tree :span="12" :data="data" show-checkbox default-expand-all node-key="path" ref="tree" highlight-current
          :props="defaultProps" :default-checked-keys="checkedKeys">
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getRolePath } from '@/router/utils'
import { mapGetters } from 'vuex'

export default {
  name: '',
  data() {
    return {
      checkedKeys: [],
      selectedRole: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'all_routes',
      'currentRole'
    ]),
    data() {
      return this.all_routes.filter(item => !item.hidden).map(item => this.handleRoute(item))
    }
  },
  created() {
    this.selectedRole = this.roles[0]
    this.checkedKeys = getRolePath(this.selectedRole)
  },
  methods: {
    save() {
      window.localStorage.setItem('role-' + this.selectedRole, this.$refs.tree.getCheckedKeys().join(','))
      this.$message({
        message: '保存成功',
        type: 'success'
      })
      if (this.selectedRole === this.currentRole) {
        this.$store.dispatch('permission/generateRoutes', this.currentRole)
      }
    },
    changeRole(role) {
      this.checkedKeys = getRolePath(role)
    },
    handleRoute(route) {
      const result = {
        path: route.path,
        children: [],
        label: route.meta && route.meta.title,
        requiredPermission: route.requiredPermission,
        disabled: this.selectedRole === 'admin' && route.path === 'pages'
      }
      if (!route.meta && route.children && route.children.length === 1) {
        result.path = route.children[0].path
        result.label = route.children[0].meta.title
        result.requiredPermission = route.children[0].requiredPermission
        result.disabled = route.children[0].path === 'home'
      } else if (route.children) {
        result.children = route.children.map(item => ({ requiredPermission: result.requiredPermission, ...item })).filter(item => !item.hidden).map(item => this.handleRoute(item))
      }
      return result
    },
    shouldSelect(data) {
      if (!data.requiredPermission && data.children.length === 0) {
        return true
      }
      return false
    }
  }
}

</script>
<style lang="scss" scoped>
.el-tag {
  display: block;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-bottom: 32px;
}

.el-button {
  position: relative;
  margin-top: 16px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
