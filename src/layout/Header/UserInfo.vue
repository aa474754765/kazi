<template>
  <ul>
    <li><span><svg-icon class="wechat" icon-class="wechat"></svg-icon></span><span>kaka9141</span></li>
    <li><span><svg-icon class="qq" icon-class="qq"></svg-icon></span><span>474754765</span></li>
    <li><span><svg-icon class="github" icon-class="github"></svg-icon></span><span><a href="https://github.com/aa474754765/kazi" target="_blank">KAZI</a></span></li>
  </ul>
</template>

<script>

export default {
  name: '',
  data() {
    return {
    }
  },
  methods: {
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/colors.scss";

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    cursor: pointer;

    &:not(:last-of-type) {
      border-bottom: 1px solid $color-gray3;
    }

    span:first-of-type {
      display: block;
      width: 60px;
    }

    span:last-of-type {
      width: 120px;
    }

    svg {
      font-size: 18px;
    }
  }

  li:hover {
    background-color: $color-a4;
  }

}

.wechat {
  color: seagreen;
}

.qq {
  color: $color-b2-1;
}
</style>
