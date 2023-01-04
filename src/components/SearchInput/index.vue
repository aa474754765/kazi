<template>
  <el-input placeholder="请输入产品名称" v-model="text" @input="input">
    <i class="el-input__icon" :class="'el-icon-' + (text ? 'close' : 'search')" slot="suffix" @click="clear"></i>
  </el-input>
</template>

<script>
export default {
  name: 'SearchInput',
  props: ['value'],
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    clear() {
      this.text = ''
      this.$emit('input', this.text)
    },
    input() {
      this.$emit('input', this.text)
    }
  }
}

</script>
<style lang="scss" scoped>
.el-input__icon {
  cursor: pointer;
}
</style>
