'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');
var _betterScroll = require('better-scroll');var _betterScroll2 = _interopRequireDefault(_betterScroll);
var _qs = require('qs');var _qs2 = _interopRequireDefault(_qs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
{
  name: 'MenuList',
  props: ['menuList', 'listType'],
  data: function data() {
    return {
      datas: [],
      index: 0 };

  },
  computed: (0, _extends3.default)({},
  (0, _vuex.mapGetters)([
  'nameGetter',
  'ctxGetter'])),


  methods: (0, _extends3.default)({},
  (0, _vuex.mapActions)([
  'setName',
  'setCtx' //
  ]), {
    initScroll: function initScroll() {var _this = this;
      if (!this.menuScroll) {
        this.$nextTick(function () {
          _this.menuScroll = new _betterScroll2.default(_this.$refs.scrollWap, {
            click: true });

        });
      } else {
        this.menuScroll.refresh();
      }
    },
    menuClick: function menuClick(typeIndex) {
      this.index = typeIndex;
      //this.in = typeIndex
      this.$emit("type-check", typeIndex);
    } }),

  mounted: function mounted() {

  },
  watch: {
    menuList: function menuList(datas) {
      this.datas = datas;
      if (datas != [] && datas.length > 0) {
        this.initScroll();
      }
    },
    listType: function listType(index) {
      this.index = index;
    } } };
//# sourceMappingURL=index.js.map