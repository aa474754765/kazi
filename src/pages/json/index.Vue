<template>
  <div>
    <el-row>
      <el-button type="primary" @click="transform">{{ $t('button.formatted') }}</el-button>
      <el-button @click="clear">{{ $t('button.clear') }}</el-button>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="jsonResult ? 12 : 24">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="" prop="jsonText">
            <el-input type="textarea" :rows="20" :placeholder="$t('form.enter_your_json')" v-model="form.jsonText">
            </el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="12" v-if="jsonResult">
        <vue-json-pretty :height="432" :virtual="true" :showLine="true" :showIcon="true" :showLineNumber="true"
          :data="jsonResult" />
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
  data() {
    return {
      form: {
        jsonText: ''
      },
      jsonResult: null,
      rules: {
        jsonText: [
          { required: true, message: this.$t('form.enter_your_json'), trigger: 'blur' },
          { validator: validateJson, message: this.$t('form.wrong_json'), trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    transform() {
      this.$refs.form.validate((valid) => {
        if (this.form.jsonText && valid) {
          this.jsonResult = JSON.parse(this.form.jsonText)
        }
      })
    },
    clear() {
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
