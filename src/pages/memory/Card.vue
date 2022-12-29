<template>
  <el-card :body-style="{ padding: '0', color: attr.textColor }" @click.native="$emit('edit', attr)"
    :style="{ 'background-image': 'linear-gradient(' + attr.background + ')' }" class="card">
    <span class="tag">{{ attr.type }}</span>
    <div class="from-to-text">
      <a>{{ attr.calculateType ? '剩' : '第' }}</a>
      <a>{{ day }}</a>
      <a>天</a>
    </div>
    <div class="divider" :style="{ 'background-color': attr.textColor }"></div>
    <div class="body-text">
      <a>{{ attr.name }}</a>
      <a>{{ '纪念日：' + attr.date }}</a>
    </div>
  </el-card>
</template>

<script>
export default {
  name: '',
  props: ['attr'],
  data () {
    return {
    }
  },
  computed: {
    day () {
      let result = 0
      // 计算过了多少天
      if (!this.attr.calculateType) {
        result = (new Date(this.getToday()).getTime() - new Date(this.attr.date).getTime()) / 3600 / 1000 / 24
        // 计算还有多少天
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
    // yyyy-mm-dd格式
    getToday () {
      return `${new Date().getFullYear()}-${this.addZero(new Date().getMonth() + 1)}-${this.addZero(new Date().getDate())}`
    },
    addZero (num) {
      return num < 10 ? ('0' + num) : num
    }
  }
}

</script>
<style lang="scss" scoped>
.card {
  position: relative;
  box-sizing: border-box;
  margin: 16px 0;
  height: 160px;
  padding: 8px;

  .tag {
    position: absolute;
    right: 8px;
    font-size: 12px;
    padding: 2px 4px;
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
