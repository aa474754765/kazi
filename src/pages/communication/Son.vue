<template>
  <div class="son">
    <span>{{ message }}</span>
    <span>{{ message2 }}</span>
    <el-button @click="sync">.sync</el-button>{{ number }}
    <grand-son v-bind="$attrs" v-on="$listeners" @click="click"></grand-son>
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue'

export default {
  name: '',
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  components: {
    GrandSon
  },
  data() {
    return {
      message2: ''
    }
  },
  computed: {
    message() {
      return this.$parent.message
    }
  },
  methods: {
    click() {
      this.message2 = 'grandson emit'
    },
    sync() {
      this.$emit('update:number', this.number + 1)
    }
  }
}

</script>
<style lang="scss" scoped>
.son {
  position: absolute;
  width: 80%;
  height: 200px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: aqua;
}

span {
  display: block;
}
</style>
