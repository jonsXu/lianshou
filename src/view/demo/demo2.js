import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demotwo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test:[1,2],
      imgUrl:'~static/1.png',
    

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
        'setCtx' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    hehe(){
      // this.setName("gege")
      // this.setCtx('xixi')
      //this.test.push(2)

      //this.test[0]=this.test[0]+1
      this.$set(this.test,0,this.test[0]+1)//这样的监听才有效  主要原因是 vue响应式原理的问题。

      
    }
  },
  mounted(){
    //this.sets("wangwang")
    
  },
  watch:{
    test:{
      handler:function(){
        alert(11)
      },
      deep:true
    }
  }
}