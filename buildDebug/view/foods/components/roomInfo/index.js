'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

{
  name: 'RoomInfo',
  props: ['form'],
  data: function data() {
    return {
      data: {} };

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
    show: function show() {
      this.$emit('show', true);
    } }),

  mounted: function mounted() {
  },
  watch: {
    form: function form(data) {
      this.data = data;
    } } };
//# sourceMappingURL=index.js.map