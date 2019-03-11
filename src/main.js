import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/base.css'// 公共资源 css本身会暴露
import './assets/js/font'//自执行脚本

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
