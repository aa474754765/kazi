<template>
  <div>
    <el-row>
      <section class="operation-panel">
        <el-button @click="create"><i class="el-icon-circle-plus el-icon--left"></i>新建产品</el-button>
        <search-input v-model="filterText" @input="inputChange" placeholder="请输入产品名称"></search-input>
      </section>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(item, index) in _displayList" :key="index">
        <div class="card-item">
          <div class="card-item-title">
            <div class="card-item-title-logo">
              <svg-icon :icon-class="item.icon"></svg-icon>
            </div>
            <div class="card-item-title-operation">
              <el-tag :type="item.status ? 'success' : 'info'">{{ item.status ? '已启用' : '已停用' }}</el-tag>
              <el-dropdown trigger="click">
                <i class="dropdown-icon el-icon-more"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="edit(index)">管理</el-dropdown-item>
                  <el-dropdown-item @click.native="remove">删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <p class="card-item-name text-text-color-regular">{{ item.name }}</p>
          <p class="card-item-desc text-text-color-regular">{{ item.desc }}</p>
        </div>
      </el-col>
    </el-row>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex"
        :page-sizes="[12, 24, 36, 48]" :page-size="currentPage" layout="total, sizes, prev, pager, next, jumper"
        :total="list.length">
      </el-pagination>
    </div>
    <el-dialog :title="editMode === 'create' ? '新建产品' : '编辑产品'" :visible.sync="dialogVisible" width="50%">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio :label="false">已停用</el-radio>
            <el-radio :label="true">已启用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :rows="3" v-model="form.desc"></el-input>
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
import { getCardList } from '@/api/list'
import SearchInput from '@/components/SearchInput'

export default {
  name: '',
  components: {
    SearchInput
  },
  data() {
    return {
      filterText: '',
      list: [],
      displayList: [],
      pageIndex: 1,
      currentPage: 12,
      dialogVisible: false,
      form: {
        name: '',
        desc: '',
        status: false
      },
      editMode: 'create',
      rules: {
        name: [
          {
            required: true, message: '不能为空', trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    _displayList() {
      return this.displayList.filter(i => i.name.indexOf(this.filterText) !== -1)
    }
  },
  methods: {
    fetchData() {
      getCardList().then(response => {
        this.list = response
        this.resetDisplayList()
      })
    },
    inputChange() {
    },
    handleSizeChange(val) {
      this.currentPage = val
      this.resetDisplayList()
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      this.resetDisplayList()
    },
    resetDisplayList() {
      this.displayList = this.list.slice(this.currentPage * (this.pageIndex - 1), this.currentPage * this.pageIndex)
    },
    create() {
      this.dialogVisible = true
      this.editMode = 'create'
      this.form = {
        name: '',
        desc: '',
        status: false
      }
    },
    edit(index) {
      this.dialogVisible = true
      this.editMode = 'edit'
      this.form = this._displayList[index]
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          this.$message({
            message: this.editMode === 'create' ? '新建成功' : '保存成功',
            type: 'success'
          })
        }
      })
    },
    remove() {
      this.$alert('确定删除吗', '提示', {
        confirmButtonText: '确定',
        callback: () => {
          this.$message({
            type: 'info',
            message: '删除成功'
          })
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.el-row {
  width: 100%;
  padding: 16px;

  .el-col {
    padding: 16px;
  }
}

.operation-panel {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;

  .el-input {
    width: 300px;
  }
}

.card-item {
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  padding: 24px 32px;

  .card-item-title {
    display: flex;
    justify-content: space-between;

    &-logo {
      align-items: center;
      background: rgb(224, 235, 255);
      border-radius: 50%;
      color: rgb(0, 82, 217);
      display: flex;
      font-size: 32px;
      height: 56px;
      justify-content: center;
      width: 56px;
    }

    .dropdown-icon {
      cursor: pointer;
      transform: rotate(90deg);
    }
  }

  .card-item-name {
    font-size: 16px;
    font-weight: 400;
    margin: 24px 0px 8px
  }

  .card-item-desc {
    font-size: 12px;
    height: 40px;
    line-height: 20px;
    margin-bottom: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.pagination {
  padding: 0 32px 32px;
  text-align: right;
}
</style>
