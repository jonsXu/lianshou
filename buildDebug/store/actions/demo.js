'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _index = require('../mutations/index');var types = _interopRequireWildcard(_index);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}
// export const setName = ({ commit }, name) => {
//     commit(types.DEMO_NAME, name)
// }
exports.default = {
  setName: function setName(_ref, name) {var commit = _ref.commit;
    commit(types.DEMO_NAME, name);
  } };
//# sourceMappingURL=demo.js.map