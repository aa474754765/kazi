<template>
  <el-input :placeholder="placeholder" v-model="text" @input="input">
    <i class="el-input__icon" :class="'el-icon-' + (text ? 'close' : 'search')" slot="suffix" @click="clear"></i>
  </el-input>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
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
