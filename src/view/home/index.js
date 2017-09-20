import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test:'',
      imgUrl:'../../../static/1.png',
    }
  },
  computed: {
      
      ...mapGetters([
        'nameGetter',
      ])
  },
  methods:{
    ...mapActions([
        'setName' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    hehe(){
      this.setName("gege")
    }
  },
  mounted(){
    //this.sets("wangwang")
    
  }
}