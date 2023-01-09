import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

function filterRoutes(routes) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (!tmp.requiredPermission) {
      if (tmp.children) {
        tmp.children = filterRoutes(tmp.children)
      }
      res.push(tmp)
    }
  })

  return res
}

/**
 * requiredPermission: true       if set true, item will not show in default(default is false)
 */

export const allRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/dashboard/index'),
        name: 'dashboard',
        meta: { title: '首页', icon: 's-home' }
      }
    ]
  },
  {
    path: '/board',
    component: Layout,
    requiredPermission: true,
    children: [
      {
        path: 'message',
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
        path: 'large_chart',
        component: () => import('@/pages/large-chart/index'),
        name: 'largeChart',
        requiredPermission: true,
        meta: { title: '大数据图表', icon: 'pie-chart', full: true }
      },
      {
        path: 'map',
        component: () => import('@/pages/map/index'),
        name: 'map',
        requiredPermission: true,
        meta: { title: '地图', icon: 'map-location', full: true }
      },
      {
        path: 'card_list',
        component: () => import('@/pages/card-list/index'),
        name: 'cardList',
        meta: { title: '卡片列表', icon: 's-grid', full: true }
      },
      {
        path: 'communication',
        component: () => import('@/pages/communication/Grandpa'),
        name: 'communication',
        meta: { title: '组件通信', icon: 'data-analysis' },
        children: [
          {
            path: 'form_creator1',
            component: () => import('@/pages/form-creator/index'),
            name: 'formCreator1',
            meta: { title: '自定义表单', icon: 'eleme' }
          }
        ]
      }
    ]
  },
  {
    path: '/fun',
    component: Layout,
    requiredPermission: true,
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
  {
    path: '/permission',
    component: Layout,
    requiredPermission: true,
    meta: { title: '权限管理', icon: 'cpu' },
    children: [
      {
        path: 'roles',
        component: () => import('@/pages/roles/index'),
        name: 'roles',
        meta: { title: '角色管理', icon: 's-custom' }
      },
      {
        path: 'pages',
        component: () => import('@/pages/pages-management/index'),
        name: 'pages',
        meta: { title: '页面管理', icon: 'tickets' }
      }
    ]
  },
  { path: '*', redirect: '/home', hidden: true }
]

export const defaultRoutes = filterRoutes(allRoutes)

export default new Router({
  routes: defaultRoutes
})
