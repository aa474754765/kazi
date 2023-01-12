<template>
  <ul>
    <li :class="{'active': language === 'zh' }" @click="changeLanguage('zh')">简体中文</li>
    <li :class="{'active': language === 'en' }" @click="changeLanguage('en')">English</li>
  </ul>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'language'
    ])
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/changeLanguage', lang)
      localStorage.setItem('lang', lang)
      this.$emit('close')
    }
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
    position: relative;
    width: 100%;
    text-align: center;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
  }

  li.active {
    color: #ffffff;
    background-color: $color-a2-3;

    &:after {
      content: "";
      width: 5px;
      height: 10px;
      position: absolute;
      left: 24px;
      top: 8px;
      border: 1px solid #ffffff;
      border-top-color: transparent;
      border-left-color: transparent;
      transform: rotate(45deg);
    }
  }

  li:not(.active):hover {
    background-color: $color-a4;
  }
}
</style>
