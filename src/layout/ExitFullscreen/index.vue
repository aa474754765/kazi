<template>
  <div class="exit-fullscreen" @click="exit">
    <svg-icon icon-class="exit-fullscreen"></svg-icon>
    <span>{{ $t('menu.exit_fullScreen') }}</span>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  methods: {
    exit() {
      this.$store.dispatch('app/toggleScreenStatus')
    }
  }
}

</script>
<style lang="scss" scoped>
@import "~@/styles/colors.scss";

.exit-fullscreen {
  position: fixed;
  top: 40px;
  right: 0;
  padding: 8px;
  background-color: $background-color-kazi;
  color: $color-kazi;
  transition: all .2s;
  cursor: pointer;

  span {
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.02);
  }
}
</style>
