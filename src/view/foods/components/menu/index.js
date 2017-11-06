import { mapGetters, mapActions } from 'vuex'
import BScroll from 'better-scroll' 
import qs from 'qs'
export default {
  name: 'demotwo',
  data () {
    return {
      data:{}
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
        }
         
      })
    }
  },
  mounted(){
    this.getData()
  },
  watch:{
  }
}