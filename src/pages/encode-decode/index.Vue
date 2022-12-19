<template>
  <div>
    <el-input type="textarea" :rows="5" placeholder="请输入你要解码/编码的Url" v-model="text">
    </el-input>
    <el-row>
      <el-button type="primary" @click="encode">UrlEncode编码</el-button>
      <el-button type="primary" @click="decode">UrlDecode解码</el-button>
      <el-button type="success" @click="reset">清空</el-button>
    </el-row>
    <el-input type="textarea" :rows="5" placeholder="转换后的地址" v-model="result">
    </el-input>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      text: '',
      result: ''
    }
  },
  methods: {
    encode () {
      this.result = encodeURIComponent(this.text)
    },
    decode () {
      this.result = decodeURIComponent(this.text)
    },
    reset () {
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
