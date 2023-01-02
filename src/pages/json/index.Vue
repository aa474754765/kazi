<template>
  <div>
    <el-row>
      <el-button type="primary" @click="transform">格式化</el-button>
      <el-button @click="clear">清空</el-button>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="jsonResult ? 12 : 24">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="" prop="jsonText">
            <el-input type="textarea" :rows="20" placeholder="填入你的Json字符串" v-model="form.jsonText">
            </el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="12" v-if="jsonResult">
        <vue-json-pretty height="432" :virtual="true" :showLine="true" :showIcon="true"
          :showLineNumber="true" :data="jsonResult" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import { validateJson } from '@/utils/validators'

export default {
  name: 'Json',
  components: {
    VueJsonPretty
  },
  data () {
    return {
      form: {
        jsonText: ''
      },
      jsonResult: null,
      rules: {
        jsonText: [
          { validator: validateJson, message: 'Json格式不正确', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    transform () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.jsonResult = JSON.parse(this.form.jsonText)
        }
      })
    },
    clear () {
      this.form.jsonText = ''
      this.jsonResult = null
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

.el-button {
  margin-bottom: 32px;
}
</style>
