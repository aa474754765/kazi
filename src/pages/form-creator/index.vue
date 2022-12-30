<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item v-for="(item, index) in formItemList" :key="item.label" :label="item.label">
        <el-col :span="22">
          <el-col :span="24 / item.num">
            <form-item></form-item>
          </el-col>
          <el-col v-if="item.num > 1" :span="24 / item.num">
            <form-item></form-item>
          </el-col>
          <el-col v-if="item.num > 2" :span="24 / item.num">
            <form-item></form-item>
          </el-col>
          <el-col v-if="item.num > 3" :span="24 / item.num">
            <form-item></form-item>
          </el-col>
        </el-col>
        <i class="el-icon-close" @click.prevent="removeLine(index)"></i>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-form :inline="true" :model="newLine" :rules="rules" ref="newForm">
      <el-form-item label="标签名" prop="label">
        <el-input v-model="newLine.label" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="栏数">
        <el-input-number v-model="newLine.num" :min="1" :max="4" label="栏数"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addNewLine">添加新行</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import FormItem from './FormItem'

export default {
  components: {
    FormItem
  },
  data () {
    let validateLabel = (rule, value, callback) => {
      if (this.formItemList.find(i => i.label === value)) {
        callback(new Error('标签名不能重复'))
      } else {
        callback()
      }
    }
    return {
      formItemList: [
      ],
      form: {

      },
      newLine: {
        label: '',
        num: 1
      },
      rules: {
        label: [
          { required: true, message: '请输入标签名', trigger: 'change' },
          { validator: validateLabel, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    addNewLine () {
      this.$refs.newForm.validate((valid) => {
        if (valid) {
          const result = {
            label: this.newLine.label,
            num: this.newLine.num
          }
          this.formItemList.push(result)
        }
      })
    },
    removeLine (index) {
      this.formItemList.splice(index, 1)
    }
  }
}

</script>
<style lang="scss" scoped>
.el-icon-close {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  cursor: pointer
}

</style>
