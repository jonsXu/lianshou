<template>
  <div class="hello">
    你们说这样真的不好？{{test}}
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
      
      ...mapGetters({
        name:'nameGetter',
      })
  },
  methods:{
    // ...mapActions([
    //     'setName' // 映射 this.increment() 为 this.$store.dispatch('increment')
    //   ]),
  },
  mounted(){
    // this.setName("wangwang")
    this.test = this.name
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>