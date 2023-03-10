<template>
  <el-header>
    <div class="header-left">
      <svg-icon icon-class="logo" class-name="logo-icon"></svg-icon>
      <ul>
        <li>
          <router-link to="/">
            <span>{{ $t('menu.home') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <ul class="header-right">
      <li @click="setToFullContent"><svg-icon icon-class="fullscreen"></svg-icon><span v-if="showText">{{
        $t('menu.fullScreen')
      }}</span></li>
      <el-popover ref="message" :open-delay="400" placement="bottom-end" trigger="hover" popper-class="li-popper">
        <message-box></message-box>
        <li slot="reference">
          <svg-icon icon-class="message"></svg-icon><span v-if="showText">{{
            $t('menu.message')
          }}</span>
        </li>
      </el-popover>
      <el-popover ref="language" :open-delay="400" placement="bottom" trigger="hover" popper-class="li-popper">
        <language @close="$refs.language.doClose()"></language>
        <li slot="reference"><svg-icon icon-class="international"></svg-icon><span v-if="showText">{{
          $t('menu.language')
        }}</span></li>
      </el-popover>
      <el-popover ref="userInfo" :open-delay="400" placement="bottom-end" trigger="hover" popper-class="li-popper">
        <user-info @close="$refs.userInfo.doClose()"></user-info>
        <li slot="reference"><span><el-avatar :size="showText ? 'medium' : 'small'" :src="url"></el-avatar></span></li>
      </el-popover>
    </ul>
  </el-header>
</template>

<script>
import Language from './Language.vue'
import MessageBox from './MessageBox.vue'
import UserInfo from './UserInfo.vue'

export default {
  name: '',
  components: {
    Language,
    MessageBox,
    UserInfo
  },
  data() {
    return {
      title: '',
      url: require('@/icons/head-icons/3DDD.png')
    }
  },
  computed: {
    ...Vuex.mapGetters([
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
    height: 36px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
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

.li-popper {
  padding: 0;
}
</style>
