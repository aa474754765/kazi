import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/dashboard/index'),
          name: 'Dashboard'
        },
        {
          path: 'message_board',
          component: () => import('@/pages/message-board/index'),
          name: 'Message Board'
        }
      ]
    },
    { path: '*', redirect: '/dashboard' }
  ]
})
