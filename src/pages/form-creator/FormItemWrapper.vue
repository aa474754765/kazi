<template>
  <div>
    <template v-if="selector === 'el-input'">
      <el-input v-model="model" placeholder="请输入内容"></el-input>
    </template>
    <template v-else-if="selector === 'el-radio'">
      <el-radio v-model="model" label="1">选项1</el-radio>
      <el-radio v-model="model" label="2">选项2</el-radio>
    </template>
    <template v-else-if="selector === 'el-checkbox'">
      <el-checkbox v-model="model">选项1</el-checkbox>
      <el-checkbox v-model="model2">选项2</el-checkbox>
    </template>
    <template v-else-if="selector === 'el-select'">
      <el-select v-model="model" placeholder="请选择">
        <el-option key="1" label="选项1" value="1"></el-option>
        <el-option key="2" label="选项2" value="2"></el-option>
      </el-select>
    </template>
    <template v-else-if="selector === 'el-switch'">
      <el-switch v-model="model" active-text="开" inactive-text="关">
      </el-switch>
    </template>
    <template v-else-if="selector === 'el-slider'">
      <el-slider v-model="model"></el-slider>
    </template>
    <template v-else-if="selector === 'el-rate'">
      <el-rate v-model="model"></el-rate>
    </template>
    <template v-else-if="selector === 'el-time-picker'">
      <el-time-picker v-model="model" placeholder="选择时间">
      </el-time-picker>
    </template>
    <template v-else-if="selector === 'el-date-picker'">
      <el-date-picker v-model="model" type="date" placeholder="选择日期">
      </el-date-picker>
    </template>
  </div>
</template>

<script>
export default {
  props: ['selector'],
  data() {
    return {
      model: '',
      model2: ''
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
