import router from '@/router'
import store from '@/store'

let firstLogin = true

router.beforeEach(async(to, from, next) => {
  if (firstLogin) {
    firstLogin = false

    const roles = ['admin', 'guest']
    store.dispatch('user/setRoles', roles)
    store.dispatch('user/setCurrentRole', roles[0])
    store.dispatch('permission/generateRoutes', roles[0])
  }

  next()
})
