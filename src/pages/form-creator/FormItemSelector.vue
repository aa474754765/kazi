<template>
  <div class="form-item-selector">
    <el-button v-for="item in array" :key="item.selector" @click="$emit('select', item.selector)">{{ item.title
      }}</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      array: [
        {
          title: '单选框',
          selector: 'el-radio'
        },
        {
          title: '多选框',
          selector: 'el-checkbox'
        },
        {
          title: '输入框',
          selector: 'el-input'
        },
        {
          title: '选择器',
          selector: 'el-select'
        },
        {
          title: '开关',
          selector: 'el-switch'
        },
        {
          title: '滑块',
          selector: 'el-slider'
        },
        {
          title: '评分',
          selector: 'el-rate'
        },
        {
          title: '时间选择器',
          selector: 'el-time-picker'
        },
        {
          title: '日期选择器',
          selector: 'el-date-picker'
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
.form-item-selector {
  width: 284px;

  button {
    min-width: 84px;
    margin: 5px;
  }
}
</style>
