'use strict';var _typeof2 = require('babel-runtime/helpers/typeof');var _typeof3 = _interopRequireDefault(_typeof2);var _vue = require('vue');var _vue2 = _interopRequireDefault(_vue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue2.default.prototype.util = {
                deepCopy: function deepCopy(p, c) {
                                var c = c || {};
                                for (var i in p) {
                                                if ((0, _typeof3.default)(p[i]) === 'object') {
                                                                //对于数组的处理也到位了
                                                                //for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
                                                                c[i] = p[i].constructor === Array ? [] : {};
                                                                _vue2.default.prototype.util.deepCopy(p[i], c[i]);
                                                } else {
                                                                c[i] = p[i];
                                                }
                                }
                                return c;
                } };
//# sourceMappingURL=util.js.map