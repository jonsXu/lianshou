// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import Component from './components'  // 全局组件
import 'src/assets/css/vali.less'
import 'src/assets/css/common.less'
import 'src/assets/css/iconfont.css'
import 'src/assets/css/animate/animate.css' 
import 'src/assets/css/iconfont.js' 
   // 引入字体样式 jquery.jqprint-0.3
// import 'src/common/jquery-3.2.1.min' 
import 'src/common/util' 


Vue.use(Router)
Vue.use(VueAwesomeSwiper)
Vue.use(Component)
Vue.config.productionTip = false
Vue.prototype.$axios=axios
// 并且配置路由规则
const router = new Router({
  mode: 'history',
  routes:[...routers],
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
