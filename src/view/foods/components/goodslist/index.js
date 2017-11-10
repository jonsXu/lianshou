import { mapGetters, mapActions } from 'vuex'
import Bscroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'GoodsList',
  props:['list'],
  data () {
    return {
      data:[],
      heights:[0],
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
        'setCtx' //
    ]),
    initScroll(){
      console.info(123)
      if(!this.menuScroll){ 
        this.$nextTick(() => { 
          this.judgeHeights()
          this.menuScroll = new Bscroll(this.$refs.goods, {
            click: true,
          }) 
        })
      } else {
        this.menuScroll.refresh()
      }
      //this.judgeHeights()
      
    },
    judgeHeights(){
      let types = this.$refs.goods.querySelectorAll('li.types');
      let baseHeight = 0 
      for(let i=0;i<types.length;i++) {
        let typeH =  types[i].clientHeight
        baseHeight += typeH;
        this.heights.push(baseHeight)
      }
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
    }
  }
}