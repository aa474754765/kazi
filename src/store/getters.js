import { allRoutes } from '@/router'

const getters = {
  roles: state => state.user.roles,
  currentRole: state => state.user.currentRole,
  all_routes: () => allRoutes,
  permission_routes: state => state.permission.permission_routes,
  device: state => state.app.device,
  fullSrceen: state => state.app.fullSrceen,
  language: state => state.app.language || localStorage.getItem('lang') || 'zh'
}
export default getters
