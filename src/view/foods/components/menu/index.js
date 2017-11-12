import { mapGetters, mapActions } from 'vuex'
import Bscroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'MenuList',
  props:['menuList','listType'],
  data () {
    return {
      datas:[],
      index:0,
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
      if(!this.menuScroll){ 
        this.$nextTick(() => { 
          this.menuScroll = new Bscroll(this.$refs.scrollWap, {
            click:true
          }) 
        })
      } else {
        this.menuScroll.refresh()
      }
    },
    menuClick(typeIndex){
      this.index = typeIndex
      //this.in = typeIndex
      this.$emit("type-check",typeIndex)
    }
  },
  mounted(){
    
  },
  watch:{
    menuList(datas){
      this.datas = datas
      if(datas!=[]&&datas.length>0){
        this.initScroll()
      }
    },
    listType(index){
      this.index = index
    }
  },
}