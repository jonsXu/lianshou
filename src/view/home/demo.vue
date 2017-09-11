<template>
    <div class="hello" @click="hehe('sadsa')">
      你们说这sss样真的不好？{{nameGetter}}
      <div class="test blue"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test:''
      
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  .test{
    width: 200px;
    height:200px;
  }
}
</style>