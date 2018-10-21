'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
{
  name: 'demo',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: [1, 2],
      imgUrl: '~static/1.png' };



  },
  computed: (0, _extends3.default)({},

  (0, _vuex.mapGetters)([
  'nameGetter',
  'ctxGetter'])),


  methods: (0, _extends3.default)({},
  (0, _vuex.mapActions)([
  'setName',
  'setCtx' // 映射 this.increment() 为 this.$store.dispatch('increment')
  ]), {
    hehe: function hehe() {
      // this.setName("gege")
      // this.setCtx('xixi')
      //this.test.push(2)

      //this.msg =this.msg+ '  我我我';
      this.test[0] = this.test[0] + 1;
      //this.$set(this.test,0,this.test[0]+1)
      // this.$nextTick(() => {

      // })

    } }),

  mounted: function mounted() {
    //this.sets("wangwang")
    var str = 123;
    console.info(123);
  },
  watch: {
    test: {
      handler: function handler() {
        alert(11);
      },
      deep: true } } };
//# sourceMappingURL=index.js.map