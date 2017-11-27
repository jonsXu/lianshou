import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demo',
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

      //this.msg =this.msg+ '  我我我';
      this.test[0]=this.test[0]+1
      //this.$set(this.test,0,this.test[0]+1)
      // this.$nextTick(() => {
        
      // })
      
    }
  },
  mounted(){
    //this.sets("wangwang")
    const str =123
    console.info(123)
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