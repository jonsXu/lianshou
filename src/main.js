// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from './store'
import 'src/assets/css/vali.less'
import 'src/assets/css/common.less'
import 'src/assets/css/iconfont.css'   // 引入字体样式


Vue.use(Router)

Vue.config.productionTip = false
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
