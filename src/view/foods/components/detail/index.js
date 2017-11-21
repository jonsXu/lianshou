import { mapGetters, mapActions } from 'vuex'
import Bscroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'foodDetail',
  data () {
    return {
      datas:{},
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
          this.menuScroll = new Bscroll(this.$refs.scrollDetail, {
          }) 
        })
      } else {
        this.menuScroll.refresh()
      }
    },
  },
  mounted(){
    this.datas = this.$route.params.data
    this.initScroll();
  },
  watch:{
    menuList(datas){
      this.datas = datas
      if(datas!={}){
        this.initScroll()
      }
    },
    listType(index){
      this.index = index
    }
  },
}