'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
{
  name: 'demotwo',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: [1, 2],
      imgUrl: '~static/1.png',
      obj1: {
        oA: [1, 2] },

      obj3: [{
        name: '1',
        age: 1 },
      {
        name: '2',
        age: 2 }],

      ren: {
        name: '4',
        age: 4 } };



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

      //this.test[0]=this.test[0]+1
      this.$set(this.test, 0, this.test[0] + 1); //这样的监听才有效  主要原因是 vue响应式原理的问题。


    },
    testOa: function testOa() {

      var obj2 = new Object();
      var l = this.obj1.oA.length;
      //如果不用slice 用obj2.oA = this.obj1.oA，还是数组的浅拷贝，拷贝的是引用
      obj2.oA = this.obj1.oA.slice(0, l);
      obj2.oA[0] = 4;
      console.info(obj2);
      console.info(this.obj1);
      this.$set(this.obj3, 0, this.ren);
    } }),

  mounted: function mounted() {
    //this.sets("wangwang")

  },
  watch: {
    test: {
      handler: function handler() {
        alert(11);
      },
      deep: true } } };
//# sourceMappingURL=demo2.js.map