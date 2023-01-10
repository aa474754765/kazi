<template>
  <div>
    <el-row>
      <section class="operation-panel">
        <el-button @click="create"><i class="el-icon-circle-plus el-icon--left"></i>{{ $t('form.create_role') }}</el-button>
      </section>
    </el-row>
    <el-row class="table-container">
      <el-table :data="roles" style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" :label="$t('form.role_name')" align="center">
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog :title="$t('form.create_role')" :visible.sync="dialogVisible" width="30%">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item :label="$t('form.name')" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">{{ $t('button.cancel') }}</el-button>
        <el-button size="small" type="primary" @click="submit">{{ $t('button.confirm') }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'

export default {
  name: '',
  components: {
    SearchInput
  },
  data() {
    let validateName = (rule, value, callback) => {
      if (this.roles.find(i => i.name === value)) {
        callback(new Error(this.$t(`form.duplicate_role`)))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      form: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: this.$t(`form.null`), trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    roles() {
      return this.$store.getters.roles.map(item => ({ name: item }))
    }
  },
  methods: {
    fetchData() {
    },
    create() {
      this.dialogVisible = true
      this.form = {
        name: ''
      }
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$store.dispatch('user/addRole', this.form.name)
          this.$message({
            message: this.$t(`message.create_success`),
            type: 'success'
          })
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.operation-panel {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
}

.table-container {
  margin-top: 32px;
  padding: 8px;
}
</style>
