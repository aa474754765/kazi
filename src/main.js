// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import './styles/global.scss'

import './icons/index' // svg icon
import './permission' // permission control

Vue.config.productionTip = false

Vue.use(Element, { size: 'medium', zIndex: 3000 })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
