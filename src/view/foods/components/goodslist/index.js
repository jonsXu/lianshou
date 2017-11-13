import { mapGetters, mapActions } from 'vuex'
import Bscroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'GoodsList',
  props:['list','typeIndex'],
  data () {
    return {
      data:[],
      heights:[0],
      listIndex:0,
      y:0,
    }
  },
  computed: {
      ...mapGetters([
        'nameGetter',
        'ctxGetter'
      ]),

  },
  methods:{
    ...mapActions([
        'setName',
        'setCtx' //
    ]),
    initScroll(){
      if(!this.goodsScroll){ 
        this.$nextTick(() => { 
          this.judgeHeights()
          this.goodsScroll = new Bscroll(this.$refs.goods, {
            click: true,
            probeType:3,//开启滚动中派发滚动事件事件
          })
          this.goodsScroll.on('scroll',(poxY)=>{
            this.y = Math.abs(Math.round(poxY.y))
            this.changeMenuIndex(this.y)
          })
        })
      } else {
        this.goodsScroll.refresh()
      }
      //this.judgeHeights()
      
    },
    //改变导航列表
    changeMenuIndex(y){
        for(let i = 0 ;i<=this.heights.length-1;i++) {
          let item1 = this.heights[i]
          let item2 = this.heights[i+1]
          if(this.y>=item1&& this.y<item2){
            //this.index = i
            this.listIndex = i
            return this.$emit('change-index',this.listIndex)
          }
        }
    },
    judgeHeights(){
      let types = this.$refs.goods.querySelectorAll('li.types');
      let baseHeight = 0 
      for(let i=0;i<types.length;i++) {
        let typeH =  types[i].clientHeight
        baseHeight += typeH;
        this.heights.push(baseHeight)
      }
      
    },
    add(index1,index2,e){
      console.info(e)
      if(this.data[index1].foods[index2].buyNumber&&this.data[index1].foods[index2].buyNumber>0){
        this.data[index1].foods[index2].buyNumber +=1
      } else {
        this.$set(this.data[index1].foods[index2],'buyNumber',1)
      }
      
    },
    move(index1,index2,event){
      this.data[index1].foods[index2].buyNumber +=-1
    }
  },
  mounted(){
    
  },
  watch:{
    list(datas){
      this.data = datas
      if(datas!=[]&&datas.length>0){
        this.initScroll()
      }
    },
    typeIndex(index){
      //this.index = index
      this.goodsScroll.scrollTo(0, -this.heights[index], 300)
    },
  }
}