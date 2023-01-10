<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-row :gutter="20">
        <el-col :span="12">
          <kpi-item score="12,325,131" backgroundColor="cadetblue" icon="sell" :title="$t('chart.sales_count')" trendText="+ 2.8%"
            targetText="20,000,000"></kpi-item>
        </el-col>
        <el-col :span="12">
          <kpi-item score="210" backgroundColor="violet" :title="$t('chart.client')" trendText="- 11.2%"></kpi-item>
        </el-col>
      </el-row>
      <statistic></statistic>
      <line-chart></line-chart>
    </el-col>
    <el-col :span="8">
      <rank></rank>
    </el-col>
  </el-row>
</template>

<script>
import Rank from './Rank'
import KpiItem from './KpiItem'
import Statistic from './Statistic.vue'
import LineChart from './LineChart.vue'

export default {
  name: 'Dashboard',
  components: {
    Rank,
    KpiItem,
    Statistic,
    LineChart
  },
  data() {
    return {

    }
  }
}

</script>
<style lang="scss" scoped>

</style>
