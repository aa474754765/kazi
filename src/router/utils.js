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
