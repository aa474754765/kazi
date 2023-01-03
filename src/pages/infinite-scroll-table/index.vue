<template>
  <el-table ref="table" v-loading="loading" element-loading-spinner="el-icon-loading" class="infinite-scroll-table"
    element-loading-background="rgba(0, 0, 0, 0)" :data="displayData" highlight-current-row :height="tableHeight"
    :max-height="tableHeight" v-el-table-infinite-scroll="load" infinite-scroll-disabled="disabled">
    <el-table-column type="index"></el-table-column>
    <el-table-column property="sex" label="性别" width="80" align="center"></el-table-column>
    <el-table-column property="name" label="姓名" width="180" align="center"></el-table-column>
    <el-table-column property="date" label="出生日期" width="180" align="center"></el-table-column>
    <el-table-column label="地址" align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.address.replaceAll(' ', '') }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import elTableInfiniteScroll from 'el-table-infinite-scroll'
import { getUsers } from '@/api/list'

export default {
  name: '',
  directives: {
    'el-table-infinite-scroll': elTableInfiniteScroll
  },
  data() {
    return {
      tableHeight: 500,
      loading: false,
      disabled: false,
      count: 15,
      tableData: [],
      displayData: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getUsers().then(response => {
        this.tableData = response
      })
    },
    load() {
      this.loading = true
      setTimeout(() => {
        this.displayData = this.tableData.slice(0, this.displayData.length + this.count)
        this.loading = false
      }, 500)
    }
  }
}

</script>
<style lang="scss">
.infinite-scroll-table .el-icon-loading {
  font-size: 24px;
}
</style>
