<template>
  <div>
    <header>销售排行榜</header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="score" label="销售量">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: '张三',
          score: '1024'
        },
        {
          name: '胡歌',
          score: '868'
        },
        {
          name: '李大伯',
          score: '861'
        },
        {
          name: '张翠萍',
          score: '700'
        },
        {
          name: '郭小川',
          score: '698'
        },
        {
          name: '翟志刚',
          score: '478'
        },
        {
          name: '黄晓霞',
          score: '470'
        },
        {
          name: '孙怡',
          score: '425'
        },
        {
          name: '王一明',
          score: '421'
        },
        {
          name: '唐诗婷',
          score: '378'
        },
        {
          name: '刘伟',
          score: '356'
        },
        {
          name: '莫菜心',
          score: '228'
        },
        {
          name: 'kazi',
          score: '212'
        },
        {
          name: '陈塘关',
          score: '210'
        },
        {
          name: '刘小峰',
          score: '198'
        }
      ]
    }
  }
}

</script>
<style lang="scss">
.cell {
  text-align: center;
}
</style>
