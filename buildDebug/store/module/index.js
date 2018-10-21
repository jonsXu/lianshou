'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _index = require('../mutations/index');var types = _interopRequireWildcard(_index);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// initial state
// shape: [{ id, quantity }]
var state = {
  name: 'hehe'



  // mutations
};var mutations = (0, _defineProperty3.default)({},

types.DEMO_NAME, function (state, data) {
  // rollback to the cart saved before sending the request
  state.name = data;
});exports.default =


{
  state: state,
  mutations: mutations };
//# sourceMappingURL=index.js.map