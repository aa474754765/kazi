<template>
  <div class="chart-container" :id="id" :style="{ height: height, width: width }"></div>
</template>

<script>
export default {
  name: '',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  data() {
    return {
      id: 'line-chart',
      chart: null
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: this.$t('chart.title_4')
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: [this.$t('chart.region1'), this.$t('chart.region2'), this.$t('chart.region3'), this.$t('chart.region4')]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: [this.$t('chart.jan'), this.$t('chart.feb'), this.$t('chart.mar'), this.$t('chart.apr'),
              this.$t('chart.may'), this.$t('chart.jun'), this.$t('chart.jul'), this.$t('chart.aug'),
              this.$t('chart.sep'), this.$t('chart.oct'), this.$t('chart.nov'), this.$t('chart.dec')]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: this.$t('chart.region1'),
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250, 140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: this.$t('chart.region2'),
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(0, 221, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310, 120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: this.$t('chart.region3'),
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(55, 162, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220, 320, 132, 201, 334, 190, 130, 220]
          },
          {
            name: this.$t('chart.region4'),
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 0, 135)'
                },
                {
                  offset: 1,
                  color: 'rgb(135, 0, 157)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120, 220, 402, 231, 134, 190, 230, 120]
          }
        ]
      })
    },
    resizeHandler() {
      this.chart.resize()
    }
  }
}

</script>
<style lang="scss" scoped>
.chart-container {
  margin-top: 32px;
}
</style>
