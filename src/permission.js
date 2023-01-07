import Router from 'vue-router'
import router from '@/router'
import store from '@/store'

let firstLogin = true

router.beforeEach(async(to, from, next) => {
  if (firstLogin) {
    firstLogin = false

    const roles = ['admin', 'guest']
    store.dispatch('user/setRoles', roles)
    store.dispatch('user/setCurrentRole', roles[0])
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles[0])
    // refresh the routes based on the routes by role
    // eslint-disable-next-line new-cap
    router.matcher = new Router({
      routes: accessRoutes
    }).matcher
  }

  next()
})
