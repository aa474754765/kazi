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
      id: 'id'
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
    setOptions() {
      this.chart.setOption({})
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
