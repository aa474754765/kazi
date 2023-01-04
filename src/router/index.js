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
        meta: { title: '报表', icon: 's-marketing' }
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
        meta: { title: 'Json 转换器', icon: 'basketball', subTitle: '<a href="https://github.com/leezng/vue-json-pretty" target="_blank">vue-json-pretty</a>' }
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
    path: '/data',
    component: Layout,
    meta: { title: '数据', icon: 's-data' },
    children: [
      {
        path: 'photos_lazy_loaded',
        component: () => import('@/pages/photos-lazy-loaded/index'),
        name: 'photosLazyLoaded',
        meta: { title: '图片懒加载', icon: 'picture-outline', subTitle: '<a href="https://picsum.photos/" target="_blank">random photos</a>' }
      },
      {
        path: 'infinite_scroll_table',
        component: () => import('@/pages/infinite-scroll-table/index'),
        name: 'infiniteScroll',
        meta: { title: '表格无限滚动', icon: 'd-caret', subTitle: '<a href="https://github.com/yujinpan/el-table-infinite-scroll#vue2--element-ui" target="_blank">el-table-infinite-scroll</a>' }
      },
      {
        path: 'infinite_scroll_list',
        component: () => import('@/pages/infinite-scroll-list/index'),
        name: 'infiniteScroll2',
        meta: { title: '列表无限滚动', icon: 'sort' }
      },
      {
        path: 'map',
        component: () => import('@/pages/map/index'),
        name: 'map',
        meta: { title: '地图', icon: 'map-location', full: true }
      },
      {
        path: 'card_list',
        component: () => import('@/pages/card-list/index'),
        name: 'cardList',
        meta: { title: '卡片列表', icon: 's-grid', full: true }
      }
    ]
  },
  {
    path: '/fun',
    component: Layout,
    meta: { title: '小程序', icon: 's-opportunity' },
    children: [
      {
        path: 'form_creator',
        component: () => import('@/pages/form-creator/index'),
        name: 'formCreator',
        meta: { title: '自定义表单', icon: 'eleme' }
      },
      {
        path: 'memory',
        component: () => import('@/pages/memory/index'),
        name: 'memory',
        meta: { title: '纪念日', icon: 'moon-night' }
      }
    ]
  },
  { path: '*', redirect: '/dashboard' }
]

export default new Router({
  routes: routes
})
