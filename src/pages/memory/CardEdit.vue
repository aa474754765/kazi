<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="60px" size="mini" class="card-edit">
    <el-form-item :label="$t('form.name')" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item :label="$t('form.date')" prop="date">
      <el-date-picker v-model="form.date" type="date" value-format="yyyy-MM-dd"></el-date-picker>
    </el-form-item>
    <el-form-item :label="$t('form.type')" prop="type">
      <el-select v-model="form.type" :placeholder="$t('form.please_select')">
        <el-option key="1" :label="$t('form.important_day')" :value="$t('form.important_day')"></el-option>
        <el-option key="2" :label="$t('form.live')" :value="$t('form.live')"></el-option>
        <el-option key="3" :label="$t('form.study')" :value="$t('form.study')"></el-option>
        <el-option key="4" :label="$t('form.love')" :value="$t('form.love')"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('form.caculate_type')">
      <el-switch v-model="form.calculateType" :active-text="$t('form.left_long')" :inactive-text="$t('form.pass_long')"></el-switch>
    </el-form-item>
    <el-form-item :label="$t('form.background')">
      <el-popover trigger="click" ref="popoverRef" popper-class="card-popper">
        <div class="gradient-item">
          <div :style="{ 'background-image': 'linear-gradient(' + item + ')' }" v-for="(item, index) in gradients"
            :key="index" @click="selectBackground(item)"></div>
        </div>
        <div slot="reference">
          <el-button v-if="!form.background">{{ $t('button.select') }}</el-button>
          <div v-else
            :style="{ 'background-image': 'linear-gradient(' + form.background + ')', width: '80px', height: '40px', cursor: 'pointer' }">
          </div>
        </div>
      </el-popover>
    </el-form-item>
    <el-form-item :label="$t('form.text_color')">
      <el-color-picker v-model="form.textColor"></el-color-picker>
    </el-form-item>
    <div class="btn-line">
      <el-button size="mini" type="primary" @click="onSubmit">{{ type === 'create' ? $t('button.create') : $t('button.update') }}</el-button>
      <el-button size="mini" @click="$emit('close')">{{ $t('button.close') }}</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  props: ['type', 'formData'],
  data() {
    return {
      form: {
        name: '',
        date: '',
        type: '',
        textColor: '',
        background: '',
        calculateType: false
      },
      gradients: [
        '135deg, rgb(206, 253, 206), rgb(211, 207, 252)',
        '45deg, rgb(255, 184, 203), rgb(168, 255, 238)',
        '45deg, rgb(161, 74, 247), rgb(110, 252, 202)',
        '180deg, rgba(191, 255, 0, 0.68), rgba(0, 157, 255, 0.32)',
        '135deg, rgba(38, 0, 255, 0.37), rgba(0, 145, 255, 0.15)',
        '135deg, rgba(246, 0, 255, 0.13), rgba(255, 72, 0, 0.05)',
        '135deg, rgba(255, 225, 0, 0.31), rgba(0, 251, 255, 0.3)',
        '0deg, rgba(255, 0, 4, 0.83), rgba(255, 0, 13, 0.22)'
      ],
      rules: {
        name: [{ required: true, message: this.$t('form.enter_name'), trigger: 'change' }],
        date: [{ required: true, message: this.$t('form.enter_date'), trigger: 'change' }],
        type: [{ required: true, message: this.$t('form.enter_type'), trigger: 'change' }]
      }
    }
  },
  watch: {
    formData: {
      handler(value) {
        this.form = value
      },
      immediate: true
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.type === 'create') {
            this.form.id = new Date().getTime()
            this.$emit('create', this.form)
          } else {
            this.$emit('update', this.form)
          }
        }
      })
    },
    selectBackground(gradient) {
      this.$refs.popoverRef.doClose()
      this.form.background = gradient
    }
  }
}

</script>
<style lang="scss">
.card-edit {

  .el-form-item__label,
  .el-switch__label span {
    font-size: 12px;
  }

  .el-date-editor {
    width: 100%;
  }

  .btn-line {
    text-align: center;
  }
}

.card-popper {
  padding: 0;
}
</style>
<style lang="scss" scoped>
.gradient-item {
  display: flex;
  flex-wrap: wrap;
  width: 352px;

  div {
    width: 80px;
    height: 50px;
    margin: 4px;
    cursor: pointer;
  }
}
</style>
