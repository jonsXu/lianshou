'use strict';Object.defineProperty(exports, "__esModule", { value: true });
var _index = require('../mutations/index');var types = _interopRequireWildcard(_index);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}

// export const setCtx = ({ commit }, name) => {
//     commit(types.GAME_CTX, name)
//   }
exports.default =
{ setCtx: function setCtx(_ref, name) {var commit = _ref.commit;
        commit(types.GAME_CTX, name);
    } };
//# sourceMappingURL=game.js.map