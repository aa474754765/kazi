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
      id: 'large-pie-chart'
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
    window.onresize = () => {
      this.chart.resize()
    }
  },
  beforeDestroy() {
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
      this.chart.setOption({
        tooltip: {
          trigger: 'item'
        },
        title: {
          text: '当前人口分布',
          left: 'center'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '人口',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: 'bold'
              }
            },
            data: [
              { value: seriesData[0][0], name: this.legendData[0] },
              { value: seriesData[1][0], name: this.legendData[1] },
              { value: seriesData[2][0], name: this.legendData[2] },
              { value: seriesData[3][0], name: this.legendData[3] }
            ]
          }
        ]
      })
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
