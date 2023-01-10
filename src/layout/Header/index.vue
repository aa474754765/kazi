<template>
  <el-header>
    <div class="header-left">
      <svg-icon icon-class="logo" class-name="logo-icon"></svg-icon>
      <ul>
        <li>
          <router-link to="/">
            <span>首页</span>
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="header-right">
      <li @click="setToFullContent"><svg-icon icon-class="fullscreen"></svg-icon><span v-if="showText">大屏</span></li>
      <li><svg-icon icon-class="message"></svg-icon><span v-if="showText">消息</span></li>
      <li><svg-icon icon-class="international"></svg-icon><span v-if="showText">语言</span></li>
      <li><span><el-avatar :size="showText ? 'medium' : 'small'" :src="url"></el-avatar></span>
      </li>
    </ul>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      title: '',
      url: require('@/icons/head-icons/3DDD.png')
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ]),
    showText() {
      return this.device === 'desktop'
    }
  },
  methods: {
    setToFullContent() {
      this.$store.dispatch('app/toggleScreenStatus')
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.el-header {
  line-height: 60px;
  height: $headerHeight;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 -1px #f1f2f3;
  background-color: $background-color-kazi;
  color: $color-kazi;

  .header-left {
    padding-left: 100px;
  }
}

ul {
  position: relative;
  z-index: 2;
  padding: 0;
  list-style: none;
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    font-size: 16px;
    color: inherit;
    cursor: pointer;

    &:hover svg,
    &:hover .el-avatar {
      animation: text-jump .3s ease-in-out
    }

    >span {
      line-height: 14px;
      font-size: 14px;
    }

    svg+span {
      margin-top: 6px;
    }

    a {
      text-decoration: none;
    }

    a:visited {
      color: inherit;
    }
  }
}

.header-left a {
  font-size: 16px;

  &:hover {
    animation: text-jump .3s ease-in-out
  }
}

@keyframes text-jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
<style>
.logo-icon {
  position: absolute;
  left: -36px;
  top: -20px;
  width: 200px;
  height: 100px;
}
</style>
