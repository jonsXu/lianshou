<template>
    <pg-wrapper class="home">
      <room-info class="header" :form="data.seller"></room-info>
      <div class="tag"></div>
      <div class="middle">
        <menu-list class="menu" :menuList="data.goods"></menu-list>
        <goods-list class="goodslist" :list="data.ratings"></goods-list>
      </div>
    </pg-wrapper>
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
    background: white;
    position: relative;
    .header{
      position: relative;
      width:100%;
       top: 0px;
    }
    .tag{
      height: 2rem;
      position: relative;
      background: black;
    }
    .middle{
      display: flex;
      //这个top为什么别人能定这么准  是因为计算好的。。计算好了高度 然后用top去定 所以定的好 我也可以计算了以后去定
      top:8rem;
      bottom: 0;
      position: absolute;
      width:100%;
      .menu{
        width: 30%;
      }
      .goodslist{
      }
    }
  }  
</style>