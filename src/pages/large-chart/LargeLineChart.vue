<template>
  <div class="chart-container" :id="id"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: '',
  data() {
    return {
      chart: null,
      id: 'large-line-chart'
    }
  },
  props: {
    chartData: {
      type: Object,
      required: false
    },
    legendData: {
      type: Array,
      required: true
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
    },
    setOptions({ xAxisData, seriesData }) {
      const series = this.legendData.map((legend, index) => (
        {
          name: legend,
          type: 'line',
          stack: 'Total',
          sampling: 'lttb',
          large: true,
          data: seriesData[index]
        }
      ))
      this.chart.setOption(
        {
          title: {
            text: '常住人口预测表'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: this.legend
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '12%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData
          },
          yAxis: {
            type: 'value'
          },
          dataZoom: [
            {
              start: 0,
              end: 20,
              realtime: false,
              height: 20
            }
          ],
          series: series
        }
      )
    },
    resizeHandler() {
      this.chart.resize()
    }
  }
}

</script>
<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>
