<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="10">
        <el-input type="textarea" :rows="20" placeholder="填入你的Json字符串" v-model="jsonText">
        </el-input>
      </el-col>
      <el-col :xs="24" :sm="4">
        <el-button type="primary">查看结果</el-button>
      </el-col>
      <el-col :xs="24" :sm="10"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      jsonText: ''
    }
  }
}

</script>
<style lang="scss" scoped>
.el-row {
  display: flex;
  align-items: center;

  >* {
    text-align: center;
  }
}
</style>
