<template>
  <el-card shadow="never" class="statistic-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div>
          <el-statistic group-separator="," :value="value1" :title="$t('chart.total_orders')"></el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic group-separator="," :value="value2" :title="$t('chart.pending_orders')"></el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic group-separator="," :value="value1" :title="$t('chart.unusual_orders')">
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
          </el-statistic>
        </div>

      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic group-separator="," :value="value4" :title="$t('chart.feedback')"></el-statistic>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      like: true,
      value1: 12900,
      value2: 12,
      value3: 565,
      value4: 520
    }
  }
}
</script>
<style lang="scss" >
.statistic-container {
  margin: 8px 0;
}

.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>
