import { routes } from '@/router/index.js'

function routeMap (route) {
  // for the root menu with no children
  if (!route.path && route.children && route.children[0]) {
    return {
      title: route.children[0].meta && route.children[0].meta.title,
      path: route.children[0].path,
      icon: route.children[0].meta && route.children[0].meta.icon
    }
  }
  return {
    title: route.meta && route.meta.title,
    path: route.path,
    icon: route.meta && route.meta.icon,
    children: route.children && route.children.map(i => routeMap(i))
  }
}

export function filterRoutes () {
  return routes && routes.filter(i => i.path !== '*').map(i => routeMap(i))
}

export default filterRoutes
