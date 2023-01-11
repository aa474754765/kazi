<template>
  <el-tabs class="message-box" v-model="activeName">
    <el-tab-pane :label="$t('menu.notification') + '(6)'" name="notification">
      <ul>
        <li v-for="(item, index) in messages" :key="index">
          <span class="message-status" :style="{ 'background-color': item.color }"><i :class="item.icon"></i></span>
          <div class="message-content">{{ item.text }}</div>
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane :label="$t('menu.message') + '(4)'" name="message">
      <ul>
        <li v-for="(item, index) in notifications" :key="index">
          <el-avatar size="small" :src="url"></el-avatar>
          <div class="message-content">{{ item.text }}</div>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import data from '@/api/mock/data'

export default {
  name: '',
  data() {
    return {
      url: require('@/icons/head-icons/Cranks.png'),
      activeName: 'notification',
      messages: [],
      notifications: [],
      test: ''
    }
  },
  beforeMount() {
    this.messages = data.messages
    this.notifications = data.notifications
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/colors.scss";

ul {
  margin: 0;
  padding: 0 16px 16px;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid $color-gray4;
    padding: 8px 0;

    .message-status {
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      color: #ffffff;
    }

    .message-content {
      flex-grow: 1;
      padding: 0 10px 0 20px;
    }

    i {
      font-size: 16px;
      width: inherit;
      height: inherit;
      text-align: center;
      line-height: 24px;
    }
  }
}
</style>
<style lang="scss">
.message-box {
  max-width: 312px;

  .el-tabs__nav-wrap {
    padding: 0 36px;
    text-align: center;
  }

  .el-tabs__item {
    width: 100px;
    box-sizing: content-box;
  }

  .el-tabs__content {
    overflow: scroll;
    position: relative;
    max-height: 220px;
  }

}
</style>
