import { allRoutes } from './index'

function iteratorRoute(routes, array) {
  routes.forEach(route => {
    if (!route.requiredPermission) {
      if (route.children) {
        iteratorRoute(route.children, array)
      } else {
        array.push(route.path)
      }
    }
  })
}

export function getRolePath(roleName) {
  const storedPaths = (window.localStorage.getItem('role-' + roleName) || '').split(',').filter(i => i)
  if (storedPaths.length > 0) {
    return storedPaths
  }
  // if not reset the role pages before, use the default pages
  const paths = roleName === 'admin' ? ['pages'] : []
  iteratorRoute(allRoutes, paths)
  return paths
}

export function getTitleByi18n(route, messages) {
  // regexp, for get the last path, /a/n --> n, /a --> a, /a/b/c --> c
  const name = `${route.path}`.replace(/(\w*\/)*(?=\w*$)/, '') || 'home'
  if (messages.menu[name]) {
    return messages.menu[name]
  }
  return route.meta && route.meta.title
}

export function i18nTitle(route, replaceTitle) {
  // regexp, for get the last path, /a/n --> n, /a --> a, /a/b/c --> c
  const name = `${route.path}`.replace(/(\w*\/)*(?=\w*$)/, '') || 'home'
  if (this.$te(`menu.${name}`)) {
    return this.$t(`menu.${name}`)
  }
  return (route.meta && route.meta.title) || replaceTitle
}
