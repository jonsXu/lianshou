require("babel-register");
import { mapGetters, mapActions } from 'vuex'
import RoomInfo from './components/roomInfo/index.vue'
import MenuList from './components/menu/index.vue'
import GoodsList from './components/goodslist/index.vue'
import BScroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'demotwo',
  data () {
    return {
      data:{},
      typeIndex:0,
      listType:0,
      showBox:false,//显示遮罩
    }
  },
  computed: {
      ...mapGetters([
        'nameGetter',
        'ctxGetter',
        'orders',
      ])
  },
  methods:{
    ...mapActions([
        'setName',
        'setCtx',
        'setRoomInfo',//
        'setOrders',
    ]),
    getData(){
      this.$axios({
        method: 'get', // 请求协议
        url: '../../static/data.json', // 请求的地址
        // data: qs.stringify(data), // post 请求的数据
        timeout: 30000, // 超时时间, 单位毫秒
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result=>{
        const status = 200
        if(result.status==status){
          this.data=result.data
          this.setRoomInfo(this.data.seller)
        }
        
      })
    },
    typeChange(typeIndex){
      this.typeIndex=typeIndex
    },
    listTypeChange(index){
      this.listType=index
    },
    //深度拷贝
    deepCopy(p, c) {
　　　　var c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　　　　this.deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　},
    //添加物品到购物车
    add(item){
      let newOne = this.util.deepCopy(item.data,new Object())
      newOne['index1'] = item.index1
      newOne['index2'] = item.index2
      console.info(newOne)
      //let orders = this.orders
      if(newOne.buyNumber==1) {
        this.orders.list.push(newOne)
      } else {
        for( let i in this.orders.list) {
          if(this.orders.list[i].name == newOne.name) {
            this.orders.list[i].buyNumber += 1;
          }
        }
      }
      this.orders.number +=1 
      //this.setOrders(orders)
    },
    //移除购物车物品
    remove(item){
      let newOne = this.util.deepCopy(item.data,new Object())
      newOne['index1'] = item.index1
      newOne['index2'] = item.index2
        for(let i=0 ;i<this.orders.list.length;i++){
          if(newOne.name == this.orders.list[i].name){
            if(this.orders.list[i].buyNumber==1) {
              this.orders.list.splice(i,1);
                
            } else {
              this.orders.list[i].buyNumber +=-1
            }
            break;
          }
        }
        this.orders.number +=-1;
      //this.setOrders(orders)
    },
    show(item){
      this.showBox = item
    }
  },
  mounted(){
    this.getData()
  },
  watch:{
  },
  components:{
    RoomInfo,
    GoodsList,
    MenuList,
  }
}