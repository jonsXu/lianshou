'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');
var _betterScroll = require('better-scroll');var _betterScroll2 = _interopRequireDefault(_betterScroll);
var _qs = require('qs');var _qs2 = _interopRequireDefault(_qs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
{
  name: 'foodDetail',
  data: function data() {
    return {
      datas: {},
      index: 0,
      showIndex: 1,
      allNum: 0,
      goodNum: 0,
      badNum: 0,
      detailScroll: null };

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
    initScroll: function initScroll() {
      var self = this;
      if (this.detailScroll == null) {
        setTimeout(function () {
          self.detailScroll = new _betterScroll2.default(self.$refs.scrollDetail, {});


        }, 100);
        // this.$nextTick(() => { 
        //   self.detailScroll = new Bscroll(self.$refs.scrollDetail, {

        //   })
        // })
      } else {
        this.detailScroll.refresh();
      }
    },
    showAssess: function showAssess(index) {
      this.showIndex = index;
    } }),

  created: function created() {
    this.datas = this.$route.params.data;
    this.allNum = this.datas.ratings.length;
    var self = this;
    this.datas.ratings.forEach(function (item) {
      var type = item.rateType;
      if (type == 0) {
        self.goodNum += 1;
      } else if (type == 1) {
        self.badNum += 1;
      }

    });
    this.initScroll();
  },
  watch: {
    // datas(datas){
    //   this.datas = datas
    //   if(datas!={}){
    //     this.initScroll()
    //   }
    // },
  } };
//# sourceMappingURL=index.js.map