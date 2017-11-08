import { mapGetters, mapActions } from 'vuex'
import Bscroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'MenuList',
  props:['menuList'],
  data () {
    return {
      datas:[],
      index:0
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
        this.$nextTick(() => { this.menuScroll = new Bscroll(this.$refs.scrollWap, {}) })
      } else {
        this.menuScroll.refresh()
      }
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
    }
  },
}