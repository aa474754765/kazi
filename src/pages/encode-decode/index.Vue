<template>
  <div>
    <el-input type="textarea" :rows="5" :placeholder="$t('form.enter_your_url')" v-model="text">
    </el-input>
    <el-row>
      <el-button type="primary" @click="encode">{{ $t('button.encode')}}</el-button>
      <el-button type="primary" @click="decode">{{ $t('button.decode')}}</el-button>
      <el-button type="success" @click="reset">{{ $t('button.clear')}}</el-button>
    </el-row>
    <el-input type="textarea" :rows="5" :placeholder="$t('page.address_transfomed')" v-model="result">
    </el-input>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      text: '',
      result: ''
    }
  },
  methods: {
    encode() {
      this.result = encodeURIComponent(this.text)
    },
    decode() {
      this.result = decodeURIComponent(this.text)
    },
    reset() {
      this.text = this.result = ''
    }
  }
}

</script>
<style lang="scss" scoped>
.el-row {
  margin: 16px 0;
}
</style>
