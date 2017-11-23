import { mapGetters, mapActions } from 'vuex'
import Bscroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'foodDetail',
  data () {
    return {
      datas:{},
      index:0,
      showIndex:1,
      allNum:0,
      goodNum:0,
      badNum:0,
      detailScroll:null,
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
      var self = this
      if(this.detailScroll ==null){ 
        setTimeout(function(){
          self.detailScroll = new Bscroll(self.$refs.scrollDetail, {
            
          })
         }, 100)
        // this.$nextTick(() => { 
        //   self.detailScroll = new Bscroll(self.$refs.scrollDetail, {
            
        //   })
        // })
      } else {
        this.detailScroll.refresh()
      }
    },
    showAssess(index){
      this.showIndex = index
    }
  },
  created(){
    this.datas = this.$route.params.data
    this.allNum = this.datas.ratings.length
    let self = this
    this.datas.ratings.forEach(function(item){
        let type = item.rateType
        if(type == 0){
          self.goodNum +=1
        }else if(type == 1) {
          self.badNum +=1
        }
        
    })
    this.initScroll()
  },
  watch:{
    // datas(datas){
    //   this.datas = datas
    //   if(datas!={}){
    //     this.initScroll()
    //   }
    // },
  },
}