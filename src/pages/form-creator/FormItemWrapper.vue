<template>
  <div>
    <template v-if="selector === 'el-input'">
      <el-input v-model="model" :placeholder="$t('form.enter_content')"></el-input>
    </template>
    <template v-else-if="selector === 'el-radio'">
      <el-radio v-model="model" label="1">{{ $t('form.option1') }}</el-radio>
      <el-radio v-model="model" label="2">{{ $t('form.option2') }}</el-radio>
    </template>
    <template v-else-if="selector === 'el-checkbox'">
      <el-checkbox v-model="model">{{ $t('form.option1') }}</el-checkbox>
      <el-checkbox v-model="model2">{{ $t('form.option2') }}</el-checkbox>
    </template>
    <template v-else-if="selector === 'el-select'">
      <el-select v-model="model" :placeholder="$t('form.please_select')">
        <el-option key="1" :label="$t('form.option1')" value="1"></el-option>
        <el-option key="2" :label="$t('form.option2')" value="2"></el-option>
      </el-select>
    </template>
    <template v-else-if="selector === 'el-switch'">
      <el-switch v-model="model" :active-text="$t('form.open')" :inactive-text="$t('form.close')">
      </el-switch>
    </template>
    <template v-else-if="selector === 'el-slider'">
      <el-slider v-model="model"></el-slider>
    </template>
    <template v-else-if="selector === 'el-rate'">
      <el-rate v-model="model"></el-rate>
    </template>
    <template v-else-if="selector === 'el-time-picker'">
      <el-time-picker v-model="model" :placeholder="$t('form.select_time')">
      </el-time-picker>
    </template>
    <template v-else-if="selector === 'el-date-picker'">
      <el-date-picker v-model="model" type="date" :placeholder="$t('form.select_day')">
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
