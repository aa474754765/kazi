// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n'

import './styles/global.scss'

import './icons/index' // svg icon
import './permission' // permission control

Vue.config.productionTip = false

Vue.use(ELEMENT, { size: 'medium', zIndex: 3000 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
