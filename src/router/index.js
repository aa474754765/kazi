import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'dashboard',
        meta: { title: '报表', icon: 's-data' }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/message_board',
        component: () => import('@/pages/message-board/index'),
        name: 'messageBoard',
        meta: { title: '留言板', icon: 'edit-outline' }
      }
    ]
  },
  {
    path: '/tools',
    component: Layout,
    meta: { title: '实用工具', icon: 'paperclip' },
    children: [
      {
        path: 'json',
        component: () => import('@/pages/json/index'),
        name: 'json',
        meta: { title: 'Json 转换器', icon: 'basketball' }
      },
      {
        path: 'code',
        component: () => import('@/pages/encode-decode/index'),
        name: 'encodeDecode',
        meta: { title: 'Url在线编码/解码', icon: 'football' }
      }
    ]
  },
  {
    path: '/fun',
    component: Layout,
    meta: { title: '小程序', icon: 'lollipop' },
    children: [
      {
        path: 'form_creator',
        component: () => import('@/pages/form-creator/index'),
        name: 'formCreator',
        meta: { title: '自定义表单', icon: 'eleme' }
      }
    ]
  },
  { path: '*', redirect: '/dashboard' }
]

export default new Router({
  routes: routes
})
