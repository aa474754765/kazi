import router from '@/router'
import store from '@/store'
import { getTitleByi18n } from '@/router/utils'
import i18n from './i18n'

let firstLogin = true

router.beforeEach(async(to, from, next) => {
  if (firstLogin) {
    firstLogin = false

    const roles = ['admin', 'guest']
    store.dispatch('user/setRoles', roles)
    store.dispatch('user/setCurrentRole', roles[0])
    store.dispatch('permission/generateRoutes', roles[0])
  }
  document.title = getTitleByi18n(to, i18n.messages[i18n.locale])
  next()
})
