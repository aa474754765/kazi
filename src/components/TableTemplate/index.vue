<template>
  <div>
    <el-row>
      <section class="operation-panel">
        <el-button @click="create"><i class="el-icon-circle-plus el-icon--left"></i>{{ $t(`button.create`) }}</el-button>
      </section>
    </el-row>
    <el-row class="table-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="success" @click="edit(scope.row)">{{ $t(`button.edit`) }}</el-button>
            <el-button size="small" type="danger" @click="remove(scope.row)">{{ $t(`button.delete`) }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog :title="editMode === 'create' ? '新建' : '编辑'" :visible.sync="dialogVisible" width="50%">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="submit">确 定</el-button>
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
    return {
      dialogVisible: false,
      form: {
        name: ''
      },
      editMode: 'create',
      rules: {
        name: [
          {
            required: true, message: this.$t(`form.null`), trigger: 'blur'
          }
        ]
      },
      tableData: [{
        name: '张三'
      },
      {
        name: '张三'
      },
      {
        name: '张三'
      },
      {
        name: '张三'
      }]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
    },
    create() {
      this.dialogVisible = true
      this.editMode = 'create'
      this.form = {
        name: ''
      }
    },
    edit(row) {
      this.dialogVisible = true
      this.editMode = 'edit'
      this.form = row
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$message({
            message: this.editMode === 'create' ? this.$t(`message.create_success`) : this.$t(`message.save_success`),
            type: 'success'
          })
        }
      })
    },
    remove() {
      this.$alert(this.$t(`message.confirm_delete`), this.$t(`message.info`), {
        confirmButtonText: this.$t(`button.confirm`),
        callback: () => {
          this.$message({
            type: 'info',
            message: this.$t(`message.delete_success`)
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
