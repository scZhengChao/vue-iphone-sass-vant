//更加优雅的svg
import SvgIcon from './svg.vue'// svg组件
export default {
  install(Vue){
    // register globally
    Vue.component('svg-icon', SvgIcon)
    const req = require.context('./svg', false, /\.svg$/)
    const requireAll = requireContext => requireContext.keys().map(requireContext)
    requireAll(req)
  }
}
