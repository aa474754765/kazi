import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// eslint-disable-next-line no-undef
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
