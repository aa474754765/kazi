<template>
  <el-card shadow="never" class="kpi-item-container" :style="styleObject">
    <span class="main-number">
      {{ score }}
    </span>
    <div class="hearder-icon">
      <i :class="'icon el-icon-' + (icon || 's-custom')"></i>
      <span>{{ title }}</span>
    </div>
    <div v-if="targetText" class="target-text">
      <span>{{  targetText }}</span>
    </div>
    <div class="trend-text">
      <span>{{ trendText }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: '',
  props: ['score', 'backgroundColor', 'icon', 'title', 'trendText', 'targetText'],
  data () {
    return {
      styleObject: {
        'background-color': this.backgroundColor
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.kpi-item-container {
  min-height: 160px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.hearder-icon {
  position: absolute;
  left: 8px;
  top: 8px;
  font-size: 12px;

  & .icon {
    padding: 4px;
    font-size: 18px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.target-text {
  position: absolute;
  left: 8px;
  bottom: 8px;
  font-weight: 700;
}

.trend-text {
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-weight: 700;
}

.main-number {
  font-size: 48px;
  font-weight: 700;
}
</style>
