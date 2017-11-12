<template>
    <pg-wrapper class="home">
      <room-info class="header" :form="data.seller"></room-info>
      <ul class="tag">
        <li>
          <span>商品</span>
        </li>
        <li>
          <span>评论</span>
        </li>
        <li>
          <span>商家</span>
        </li>
      </ul>
      <div class="middle">
        <menu-list class="menu" :menuList="data.goods" :listType="listType" @type-check="typeChange"></menu-list>
        <goods-list class="goodslist" :list="data.goods" :typeIndex="typeIndex" @change-index="listTypeChange"></goods-list>
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
      height: 1.5rem;
      position: relative;
      display: flex;
      line-height: 1.5rem;
      
      li{
        flex: 1;
        font-size: 14px;
      }
    }
    .middle{
      display: flex;
      //这个top为什么别人能定这么准  是因为计算好的。。计算好了高度 然后用top去定 所以定的好 我也可以计算了以后去定
      top:7.5rem;
      bottom: 0;
      position: absolute;
      width:100%;
      
      .menu{
        width: 30%;
      }
      .goodslist{
        width: 70%;
      }
    }
  }  
</style>