<template>
  <div class="grandson">{{ message }}
    <el-button @click="$emit('click')">emit</el-button>
    {{ text }}
  </div>
</template>

<script>
import { EventBus } from '@/utils/event-bus.js'

export default {
  name: '',
  props: ['text'],
  data() {
    return {
    }
  },
  inject: ['message'],
  created() {
    setTimeout(() => {
      EventBus.$emit('event', 'Grandson send a message to grandpa by eventbus after 3s.')
    }, 3000)
  }
}

</script>
<style lang="scss" scoped>
.grandson {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100px;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: chartreuse;

  .el-button {
    margin-left: 12px;
  }
}
</style>
