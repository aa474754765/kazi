import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 定义挂载文件
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    zh: require('./zh-cn.json'),
    en: require('./en-us.json')
  }
})

export default i18n
