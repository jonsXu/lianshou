'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _typeof2 = require('babel-runtime/helpers/typeof');var _typeof3 = _interopRequireDefault(_typeof2);var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);
var _vuex = require('vuex');
var _index = require('./components/roomInfo/index.vue');var _index2 = _interopRequireDefault(_index);
var _index3 = require('./components/menu/index.vue');var _index4 = _interopRequireDefault(_index3);
var _index5 = require('./components/goodslist/index.vue');var _index6 = _interopRequireDefault(_index5);
var _betterScroll = require('better-scroll');var _betterScroll2 = _interopRequireDefault(_betterScroll);
var _qs = require('qs');var _qs2 = _interopRequireDefault(_qs);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}require("babel-register");exports.default =
{
  name: 'demotwo',
  data: function data() {
    return {
      data: {},
      typeIndex: 0,
      listType: 0,
      showBox: false //显示遮罩
    };
  },
  computed: (0, _extends3.default)({},
  (0, _vuex.mapGetters)([
  'nameGetter',
  'ctxGetter',
  'orders'])),


  methods: (0, _extends3.default)({},
  (0, _vuex.mapActions)([
  'setName',
  'setCtx',
  'setRoomInfo', //
  'setOrders']), {

    getData: function getData() {var _this = this;
      this.$axios({
        method: 'get', // 请求协议
        url: '../../static/data.json', // 请求的地址
        // data: qs.stringify(data), // post 请求的数据
        timeout: 30000, // 超时时间, 单位毫秒
        headers: {
          'X-Requested-With': 'XMLHttpRequest' } }).

      then(function (result) {
        var status = 200;
        if (result.status == status) {
          _this.data = result.data;
          _this.setRoomInfo(_this.data.seller);
        }

      });
    },
    typeChange: function typeChange(typeIndex) {
      this.typeIndex = typeIndex;
    },
    listTypeChange: function listTypeChange(index) {
      this.listType = index;
    },
    //深度拷贝
    deepCopy: function deepCopy(p, c) {
      var c = c || {};
      for (var i in p) {
        if ((0, _typeof3.default)(p[i]) === 'object') {
          c[i] = p[i].constructor === Array ? [] : {};
          this.deepCopy(p[i], c[i]);
        } else {
          c[i] = p[i];
        }
      }
      return c;
    },
    //添加物品到购物车
    add: function add(item) {
      var newOne = this.util.deepCopy(item.data, new Object());
      newOne['index1'] = item.index1;
      newOne['index2'] = item.index2;
      console.info(newOne);
      //let orders = this.orders
      if (newOne.buyNumber == 1) {
        this.orders.list.push(newOne);
      } else {
        for (var i in this.orders.list) {
          if (this.orders.list[i].name == newOne.name) {
            this.orders.list[i].buyNumber += 1;
          }
        }
      }
      this.orders.number += 1;
      //this.setOrders(orders)
    },
    //移除购物车物品
    remove: function remove(item) {
      var newOne = this.util.deepCopy(item.data, new Object());
      newOne['index1'] = item.index1;
      newOne['index2'] = item.index2;
      for (var i = 0; i < this.orders.list.length; i++) {
        if (newOne.name == this.orders.list[i].name) {
          if (this.orders.list[i].buyNumber == 1) {
            this.orders.list.splice(i, 1);

          } else {
            this.orders.list[i].buyNumber += -1;
          }
          break;
        }
      }
      this.orders.number += -1;
      //this.setOrders(orders)
    },
    show: function show(item) {
      this.showBox = item;
    } }),

  mounted: function mounted() {
    this.getData();
  },
  watch: {},

  components: {
    RoomInfo: _index2.default,
    GoodsList: _index6.default,
    MenuList: _index4.default } };
//# sourceMappingURL=index.js.map