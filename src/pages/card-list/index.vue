<template>
  <div>
    <el-row>
      <section class="operation-panel">
        <el-button @click="create"><i class="el-icon-circle-plus el-icon--left"></i>{{
          $t(`form.create_product`)
        }}</el-button>
        <search-input v-model="filterText" @input="inputChange" :placeholder="$t(`form.enter_product_name`)"></search-input>
      </section>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(item, index) in _displayList" :key="index">
        <div class="card-item">
          <div class="card-item-title">
            <div class="card-item-title-logo">
              <svg-icon :icon-class="item.icon"></svg-icon>
            </div>
            <div class="card-item-title-operation">
              <el-tag :type="item.status ? 'success' : 'info'">{{
                item.status ? $t(`form.available`) : $t(`form.unavailable`)
              }}</el-tag>
              <el-dropdown trigger="click">
                <i class="dropdown-icon el-icon-more"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="edit(index)">{{ $t(`button.manage`) }}</el-dropdown-item>
                  <el-dropdown-item @click.native="remove">{{ $t(`button.delete`) }}</el-dropdown-item>
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
    <el-dialog :title="editMode === 'create' ? $t(`form.create_product`) : $t(`form.edit_product`)"
      :visible.sync="dialogVisible" width="50%">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item :label="$t(`form.name`)" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item :label="$t(`form.status`)">
          <el-radio-group v-model="form.status">
            <el-radio :label="false">{{ $t(`form.unavailable`) }}</el-radio>
            <el-radio :label="true">{{ $t(`form.available`) }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t(`form.desc`)">
          <el-input type="textarea" :rows="3" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">{{ $t(`button.cancel`) }}</el-button>
        <el-button size="small" type="primary" @click="submit">{{ $t(`button.confirm`) }}</el-button>
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
            required: true, message: this.$t(`form.null`), trigger: 'blur'
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
