'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');
var _betterScroll = require('better-scroll');var _betterScroll2 = _interopRequireDefault(_betterScroll);
var _qs = require('qs');var _qs2 = _interopRequireDefault(_qs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
{
  name: 'GoodsList',
  props: ['list', 'typeIndex'],
  data: function data() {
    return {
      data: [],
      heights: [0],
      listIndex: 0,
      y: 0 };

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
      if (!this.goodsScroll) {
        this.$nextTick(function () {
          _this.judgeHeights();
          _this.goodsScroll = new _betterScroll2.default(_this.$refs.goods, {
            click: true,
            probeType: 3 //开启滚动中派发滚动事件事件
          });
          _this.goodsScroll.on('scroll', function (poxY) {
            _this.y = Math.abs(Math.round(poxY.y));
            _this.changeMenuIndex(_this.y);
          });
        });
      } else {
        this.goodsScroll.refresh();
      }
      //this.judgeHeights()

    },
    //改变导航列表
    changeMenuIndex: function changeMenuIndex(y) {
      for (var i = 0; i <= this.heights.length - 1; i++) {
        var item1 = this.heights[i];
        var item2 = this.heights[i + 1];
        if (this.y >= item1 && this.y < item2) {
          //this.index = i
          this.listIndex = i;
          return this.$emit('change-index', this.listIndex);
        }
      }
    },
    judgeHeights: function judgeHeights() {
      var types = this.$refs.goods.querySelectorAll('li.types');
      var baseHeight = 0;
      for (var i = 0; i < types.length; i++) {
        var typeH = types[i].clientHeight;
        baseHeight += typeH;
        this.heights.push(baseHeight);
      }

    },
    add: function add(index1, index2, e) {
      console.info(e);
      if (this.data[index1].foods[index2].buyNumber && this.data[index1].foods[index2].buyNumber > 0) {
        this.data[index1].foods[index2].buyNumber += 1;
      } else {
        this.$set(this.data[index1].foods[index2], 'buyNumber', 1);
      }
      this.$emit('add', { data: this.data[index1].foods[index2], index1: index1, index2: index2 });
    },
    move: function move(index1, index2, event) {
      this.data[index1].foods[index2].buyNumber += -1;
      this.$emit('remove', { data: this.data[index1].foods[index2], index1: index1, index2: index2 });
    },
    detail: function detail(data) {
      this.$router.push({ name: 'foodDetail', params: { data: data } });
    } }),

  mounted: function mounted() {

  },
  watch: {
    list: function list(datas) {
      this.data = datas;
      if (datas != [] && datas.length > 0) {
        this.initScroll();
      }
    },
    typeIndex: function typeIndex(index) {
      //this.index = index
      this.goodsScroll.scrollTo(0, -this.heights[index], 300);
    } } };
//# sourceMappingURL=index.js.map