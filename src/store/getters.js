import { allRoutes } from '@/router'

const getters = {
  roles: state => state.user.roles,
  currentRole: state => state.user.currentRole,
  all_routes: () => allRoutes,
  permission_routes: state => state.permission.permission_routes
}
export default getters
