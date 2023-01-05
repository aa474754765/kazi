<template>
  <div class="grandpa">
    <span>{{ message }}</span>
    <span>{{ message2 }}</span>
    <son @click="click" :text="text" :number.sync="number"></son>
  </div>
</template>

<script>
import Son from './son.vue'
import { EventBus } from '@/utils/event-bus.js'

export default {
  name: '',
  components: {
    Son
  },
  data() {
    return {
      text: '$attrs text',
      message: '',
      message2: '',
      number: 20
    }
  },
  provide() {
    return {
      message: 'data from grandpa by provide/inject'
    }
  },
  mounted() {
    EventBus.$on('event', data => {
      this.message = data
    })
  },
  methods: {
    click() {
      this.message2 = '$listeners'
    }
  }
}

</script>
<style lang="scss" scoped>
.grandpa {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: yellow;

  span {
    display: block;
  }
}
</style>
