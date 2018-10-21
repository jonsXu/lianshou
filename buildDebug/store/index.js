'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _vue = require('vue');var _vue2 = _interopRequireDefault(_vue);
var _vuex = require('vuex');var _vuex2 = _interopRequireDefault(_vuex);
var _actions = require('./actions');var _actions2 = _interopRequireDefault(_actions);
var _getters = require('./getters');var _getters2 = _interopRequireDefault(_getters);
var _index = require('./module/index');var _index2 = _interopRequireDefault(_index);
var _game = require('./module/game');var _game2 = _interopRequireDefault(_game);
var _food = require('./module/food');var _food2 = _interopRequireDefault(_food);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue2.default.use(_vuex2.default);exports.default =

new _vuex2.default.Store({
  actions: _actions2.default,
  getters: _getters2.default,
  modules: {
    demo: _index2.default,
    game: _game2.default,
    food: _food2.default } });
//# sourceMappingURL=index.js.map