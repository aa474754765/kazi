<template>
  <el-card :body-style="{ padding: '0', color: attr.textColor }"
    :style="{ 'background-image': 'linear-gradient(' + attr.background + ')', cursor: inEdit ? 'move' : 'default' }"
    class="card">
    <span class="tag">{{ attr.type }}</span>
    <div class="from-to-text">
      <a>{{ attr.calculateType ? $t('form.left') : $t('form.pass') }}</a>
      <a>{{ day }}</a>
      <a>{{ $t('form.day') }}</a>
    </div>
    <div class="divider" :style="{ 'background-color': attr.textColor }"></div>
    <div class="body-text">
      <a>{{ attr.name }}</a>
      <a>{{ $t('form.memory_day') + '：' + attr.date }}</a>
    </div>
    <i v-if="inEdit" @click="$emit('remove', attr)" class="el-icon-close"></i>
    <i v-if="inEdit" @click="$emit('edit', attr)" class="el-icon-edit"></i>
  </el-card>
</template>

<script>
export default {
  name: '',
  props: ['attr', 'inEdit'],
  data() {
    return {
    }
  },
  computed: {
    day() {
      let result = 0
      // pass days
      if (!this.attr.calculateType) {
        result = (new Date(this.getToday()).getTime() - new Date(this.attr.date).getTime()) / 3600 / 1000 / 24
        // days left
      } else {
        let nextDay = `${new Date().getFullYear()}-${this.addZero(new Date(this.attr.date).getMonth() + 1)}-${this.addZero(new Date(this.attr.date).getDate())}`
        if (new Date(nextDay) < new Date(this.getToday())) {
          nextDay = `${new Date().getFullYear() + 1}-${this.addZero(new Date(this.attr.date).getMonth() + 1)}-${this.addZero(new Date(this.attr.date).getDate())}`
        }
        result = (new Date(nextDay).getTime() - new Date(this.getToday()).getTime()) / 3600 / 1000 / 24
      }
      return result
    }
  },
  methods: {
    // yyyy-mm-dd
    getToday() {
      return `${new Date().getFullYear()}-${this.addZero(new Date().getMonth() + 1)}-${this.addZero(new Date().getDate())}`
    },
    addZero(num) {
      return num < 10 ? ('0' + num) : num
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.card {
  position: relative;
  box-sizing: border-box;
  margin: 16px 0;
  height: 160px;
  padding: 8px;
  overflow: visible;

  .el-icon-close,
  .el-icon-edit {
    position: absolute;
    text-align: center;
    width: 32px;
    line-height: 20px;
    border-radius: 10px;
    left: 0;
    color: #fff;
    cursor: pointer;
    transform: translateX(-50%) translateY(-50%);
  }

  .el-icon-close {
    top: 0;
    background-color: $red;
  }

  .el-icon-edit {
    top: 30px;
    background-color: $blue;
  }

  .tag {
    position: absolute;
    right: 8px;
    font-size: 12px;
    padding: 2px 4px;
    color: #fff;
    background-color: burlywood;
    border-radius: 8px;
  }

  .from-to-text,
  .divider,
  .body-text {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
  }

  .from-to-text {
    top: 10%;
    font-size: 12px;

    a:nth-of-type(2) {
      font-size: 32px;
    }
  }

  .divider {
    width: 80%;
    height: 1px;
    margin: auto;
    top: 40%;
  }

  .body-text {
    top: 55%;
    font-size: 16px;
    letter-spacing: 2px;

    a {
      display: block;
      margin-bottom: 4px;

      &:last-child {
        font-size: 12px;
      }
    }
  }
}
</style>
