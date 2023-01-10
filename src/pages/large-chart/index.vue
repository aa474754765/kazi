<template>
  <div v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.1)">
    <el-card>
      <div class="operation-panel">
        <span>{{ $t('form.data_volume') }}</span>
        <el-slider :min="100000" :max="1000000" v-model="count" :step="10000">
        </el-slider>
        <span><el-button @click="reloadData">{{ $t('form.refresh_data') }}</el-button></span>
      </div>
    </el-card>
    <el-card>
      <large-line-chart :chartData="chartData" :legendData="legend"></large-line-chart>
    </el-card>
    <el-row>
      <el-col :span="12">
        <el-card>
          <large-pie-chart :chartData="chartData" :legendData="legend"></large-pie-chart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <scatter-chart :chartData="chartData"></scatter-chart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LargeLineChart from './LargeLineChart.vue'
import LargePieChart from './LargePieChart.vue'
import ScatterChart from './ScatterChart.vue'

export default {
  name: '',
  components: {
    LargeLineChart,
    LargePieChart,
    ScatterChart
  },
  data() {
    return {
      count: 100000,
      loading: true,
      legend: [this.$t('chart.city1'), this.$t('chart.city2'), this.$t('chart.city3'), this.$t('chart.city4')],
      chartData: null
    }
  },
  mounted() {
    this.reloadData()
  },
  methods: {
    reloadData() {
      this.loading = true
      this.$nextTick(() => {
        this.getMockData().then(data => {
          this.chartData = data
          this.loading = false
        })
      })
    },
    getMockData() {
      return new Promise(resolve => {
        let base = +new Date()
        let oneDay = 24 * 3600 * 1000
        let date = []
        // eslint-disable-next-line one-var
        let data1 = [Math.round(Math.random() * 10000)],
          data2 = [Math.round(Math.random() * 10000 + 10000)],
          data3 = [Math.round(Math.random() * 10000 + 20000)],
          data4 = [Math.round(Math.random() * 10000 + 30000)]
        for (let i = 1; i < this.count; i++) {
          var now = new Date((base += oneDay))
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
          data1.push(Math.round((Math.random() - 0.5) * 500 + data1[i - 1]))
          data2.push(Math.round((Math.random() - 0.5) * 500 + data2[i - 1]))
          data3.push(Math.round((Math.random() - 0.5) * 500 + data3[i - 1]))
          data4.push(Math.round((Math.random() - 0.5) * 500 + data4[i - 1]))
        }
        resolve({ xAxisData: date, seriesData: [data1, data2, data3, data4] })
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.el-card {
  margin: 16px;

  .operation-panel {
    display: flex;
    width: 100%;
    font-size: 14px;
    justify-content: end;
    align-items: center;

    .el-slider {
      width: 200px;
      margin: 0 16px;
    }
  }
}
</style>
