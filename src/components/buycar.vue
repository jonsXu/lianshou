<template>
  <div class="main">
      <div class="content">
        <div class="car"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PgBuyCar',
  props:{
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    tap() {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~assets/css/vali';
  .main{
    width: 100%;
    position: absolute;
    bottom: 0%;
    height: 2rem;
    z-index: 999;
    background: black;
    .content{
      margin: 0 1rem;
      .car{
        height: 2rem;
        width: 2rem;
        position: relative;
        bottom: .3rem;
        left:.3rem;
        border-radius: 50%;
        background: red;
      }
    }
  }
</style>
