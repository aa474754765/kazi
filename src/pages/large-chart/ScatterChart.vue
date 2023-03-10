<template>
  <div class="chart-container" :id="id"></div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      chart: null,
      id: 'scatter-chart'
    }
  },
  props: {
    chartData: {
      type: Object,
      required: false
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
      const data = []
      for (let i = 0; i < xAxisData.length; i += 1000) {
        // eslint-disable-next-line no-useless-escape
        const year = xAxisData[i].replace(/\/\d+\/\d+$/, '')
        // dirty hard code
        data.push([Number(year), seriesData[0][i] + seriesData[1][i] + seriesData[2][i] + seriesData[3][i]])
      }
      const options = {
        title: {
          text: this.$t('chart.title_3'),
          left: 'center',
          top: 0
        },
        xAxis: {
          scale: true
        },
        yAxis: {
          name: this.$t('chart.title_3_unit'),
          scale: true,
          axisLabel: {
            formatter: function(value) {
              return String(value).replace(/0{4}$/, '')
            }
          }
        },
        dataZoom: {
          start: 0,
          end: 20,
          realtime: false,
          height: 20
        },
        tooltip: {
          show: false
        },
        color: ['#9a60b4', '#73c0de'],
        series: [
          {
            type: 'effectScatter',
            symbolSize: 20,
            data: [
              [2030, 100000],
              [2250, 80000]
            ]
          },
          {
            type: 'scatter',
            // prettier-ignore
            data: data
          }
        ]
      }
      this.chart.setOption(options)
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
