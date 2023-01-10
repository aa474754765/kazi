<template>
  <div>
    <header>{{ $t('chart.title_5') }}</header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index">
      </el-table-column>
      <el-table-column prop="name" :label="$t('chart.name')">
      </el-table-column>
      <el-table-column prop="score" :label="$t('chart.sales_count')">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [
        {
          name: 'Daniel Williams',
          score: '1024'
        },
        {
          name: 'Steven Lopez',
          score: '868'
        },
        {
          name: 'Paul Moore',
          score: '861'
        },
        {
          name: 'Jessica Jackson',
          score: '700'
        },
        {
          name: 'Robert Lewis',
          score: '698'
        },
        {
          name: 'Brian White',
          score: '478'
        },
        {
          name: 'Charles Hall',
          score: '470'
        },
        {
          name: 'Carol Wilson',
          score: '425'
        },
        {
          name: 'Brenda Wilson',
          score: '421'
        },
        {
          name: 'Kevin Walker',
          score: '378'
        },
        {
          name: 'Mary Garcia',
          score: '356'
        },
        {
          name: 'Margaret Young',
          score: '228'
        },
        {
          name: 'kazi',
          score: '212'
        },
        {
          name: 'Scott White',
          score: '210'
        },
        {
          name: 'Betty Lee',
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
