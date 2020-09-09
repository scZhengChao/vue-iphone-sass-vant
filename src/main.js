import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'

import plugins from '@/utils/plugins'
Vue.use(plugins)
import '@/assets/css/reset.css'
import '@/assets/js/flexible.js'

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)



Vue.config.productionTip = false
import router from './router'
import store from './store'

import VConsole from 'vconsole'
new VConsole()

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)



// Vue.config.errorHandler = function(err, vm, info) {
//     console.log(`Error: ${err.toString()}\nInfo: ${info}`);
// };





// Vue.config.warnHandler = function(msg, vm, trace) {
//  console.log(`Warn: ${msg}\nTrace: ${trace}`);
// };




// window.onerror = function(message, source, lineno, colno, error) {
//     // message：错误信息（字符串）。
//     // source：发生错误的脚本URL（字符串）
//     // lineno：发生错误的行号（数字）
//     // colno：发生错误的列号（数字）
//     // error：Error对象（对象）
//     console.log('捕获到异常：',{message, source, lineno, colno, error});
// }
// import  $ from 'jquery'
// console.dir($)
// import echarts from 'echarts'



new Vue({
  render: h => h(App),
  router,
  store,
  renderError(h, err) {
    return h("pre", { style: { color: "red" } }, err.stack);
  }
}).$mount('#app')

