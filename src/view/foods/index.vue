<template>
    <div class="home">
      
    </div>
</template>

<script>
import index from './index'
    export default {
        ...index
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '~assets/css/vali';
  .home{
    width: 100;
    height: 100%;
    background: #f6c479;
    color: white;
    .title{
      font-size: .7rem;
    }
    #c1{
      width: 14rem;
      height:20rem;
      background: white;
      margin-top:.7rem;
    }
  }  
</style>