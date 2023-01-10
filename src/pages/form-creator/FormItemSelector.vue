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
          title: this.$t('form.radio'),
          selector: 'el-radio'
        },
        {
          title: this.$t('form.checkbox'),
          selector: 'el-checkbox'
        },
        {
          title: this.$t('form.input'),
          selector: 'el-input'
        },
        {
          title: this.$t('form.select'),
          selector: 'el-select'
        },
        {
          title: this.$t('form.switch'),
          selector: 'el-switch'
        },
        {
          title: this.$t('form.slider'),
          selector: 'el-slider'
        },
        {
          title: this.$t('form.rate'),
          selector: 'el-rate'
        },
        {
          title: this.$t('form.time_picker'),
          selector: 'el-time-picker'
        },
        {
          title: this.$t('form.date_picker'),
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
