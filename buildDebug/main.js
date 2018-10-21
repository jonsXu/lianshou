'use strict';var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _vue = require('vue');var _vue2 = _interopRequireDefault(_vue);
var _App = require('./App');var _App2 = _interopRequireDefault(_App);
var _router = require('./router');var _router2 = _interopRequireDefault(_router);
var _vuex = require('vuex');var _vuex2 = _interopRequireDefault(_vuex);
var _vueRouter = require('vue-router');var _vueRouter2 = _interopRequireDefault(_vueRouter);
var _store = require('./store');var _store2 = _interopRequireDefault(_store);
var _vueAwesomeSwiper = require('vue-awesome-swiper');var _vueAwesomeSwiper2 = _interopRequireDefault(_vueAwesomeSwiper);
var _axios = require('axios');var _axios2 = _interopRequireDefault(_axios);
var _components = require('./components');var _components2 = _interopRequireDefault(_components);
require('src/assets/css/vali.less');
require('src/assets/css/common.less');
require('src/assets/css/iconfont.css');
require('src/assets/css/animate/animate.css');
require('src/assets/css/iconfont.js');


require('src/common/util');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 全局组件

require("babel-register"); // 引入字体样式 jquery.jqprint-0.3
// import 'src/common/jquery-3.2.1.min' 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vueRouter2.default);_vue2.default.use(_vueAwesomeSwiper2.default);_vue2.default.use(_components2.default);
_vue2.default.config.productionTip = false;
_vue2.default.prototype.$axios = _axios2.default;
// 并且配置路由规则
var router = new _vueRouter2.default({
  mode: 'history',
  routes: [].concat((0, _toConsumableArray3.default)(_router2.default)) });


/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: _App2.default },
  store: _store2.default });
//# sourceMappingURL=main.js.map