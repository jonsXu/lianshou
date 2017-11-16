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
      order:[],//下单的食物的数组,
      showBox:false,//显示遮罩
    }
  },
  computed: {
      ...mapGetters([
        'nameGetter',
        'ctxGetter'
      ])
  },
  methods:{
    ...mapActions([
        'setName',
        'setCtx',
        'setRoomInfo',//
    ]),
    getData(){
      this.$axios({
        method: 'get', // 请求协议
        url: 'static/data.json', // 请求的地址
        // data: qs.stringify(data), // post 请求的数据
        timeout: 30000, // 超时时间, 单位毫秒
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result=>{
        if(result.status==200){
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
    //添加物品到购物车
    add(item){
      this.order.push(item)
    },
    //移除购物车物品
    remove(item){
      for(let i=0 ;i<this.order.length;i++){
        if(item.name = this.order[i].name){
          this.order.splice(i,1);
          break;
        }
      }
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