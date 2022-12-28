<template>
  <div v-if="!inDefault" class="form-item-container">
    <form-item-wrapper :selector="itemType"></form-item-wrapper>
  </div>
  <el-popover v-else trigger="click" ref="popoverRef">
    <form-item-selector @select="select($event)"></form-item-selector>
    <div slot="reference" class="placeholder-container">
      <i class="el-icon-plus"></i>
    </div>
  </el-popover>
</template>

<script>
import FormItemSelector from './FormItemSelector'
import FormItemWrapper from './FormItemWrapper'

export default {
  name: 'FormItem',
  components: {
    FormItemSelector,
    FormItemWrapper
  },
  props: ['data'],
  data () {
    return {
      itemType: '',
      inDefault: true
    }
  },
  methods: {
    select (formItemType) {
      this.inDefault = false
      this.itemType = formItemType
      this.$refs.popoverRef.doClose()
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.form-item-container,.placeholder-container {
  width: calc(100% - 32px);
  margin: 0 16px;
  height: 40px;
  display: flex;
  align-items: center;
}

.form-item-container,.placeholder-container {
  justify-content: start;
}

.placeholder-container {
  box-sizing: border-box;
  justify-content: center;
  border: 2px dashed $blue;
  border-radius: 4px;
  cursor: pointer;

  i {
    font-size: 18px;
    color: $blue;
  }

  &:hover {
    transform: scale(1.02);

    i {
      font-weight: 700;
    }
  }
}
</style>
