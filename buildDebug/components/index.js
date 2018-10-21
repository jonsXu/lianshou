'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _icon = require('./icon.vue');var _icon2 = _interopRequireDefault(_icon);
var _wrapper = require('./wrapper.vue');var _wrapper2 = _interopRequireDefault(_wrapper);
var _buycar = require('./buycar.vue');var _buycar2 = _interopRequireDefault(_buycar);
var _confirm = require('./confirm.vue');var _confirm2 = _interopRequireDefault(_confirm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // icon
// icon
var install = function install(Vue) {Vue.component(_icon2.default.name, _icon2.default);
    Vue.component(_wrapper2.default.name, _wrapper2.default);
    Vue.component(_buycar2.default.name, _buycar2.default);
    Vue.component(_confirm2.default.name, _confirm2.default);
}; // icon
// icon
exports.default = install;
//# sourceMappingURL=index.js.map