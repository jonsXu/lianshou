<template>
    <div class="hello" @click="hehe('sadsa')">
      <div class="head">
          <div class="titles">
            <span class="name"><i class="iconfont icon-gerenzhongxin"></i>woman,address</span>
            <span class="cart"><i class="iconfont icon-gouwuche"></i><div class="number">3</div></span>
          </div>
          <div class="clear"></div>
          <ul>
            <li><a>add to whish</a></li>
            <li><a>add to cart</a></li>
          </ul>
      </div>
      <div class="middle">
          <img src="~assets/images/1.png">
          <img :src="imgUrl">
      </div>
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
    .head{
      background-color: #38474F;
      color: white;
      padding: 0.7rem 0.5rem;
      .titles{
        span{
          display: block;
        }
        .name{
          float: left;
        }
        .cart{
          float: right;
        }
        i{
          font-size: 1.5rem;
        }
        .number{
          position: absolute;
          top:0.8rem;
          right: 0.2rem;
          background: red;
          border-radius: .3rem;
          font-size: .5rem;
          width: 1rem;
        }
      }
      ul{
        display: flex;
        margin-top: 0.8rem;
        padding: .5rem;
        li{
          flex:1;
          height:1rem;
          background-color: #2D3A40;
          margin-right:2rem;
          font-size:.7rem;
          line-height:1rem;
          border-radius: .2rem;
        }
        li:last-child{
          background-color: #F6846A;
          margin-right:0;
          
        }
      }
    }
    .middle{
      padding: 0.7rem 0.5rem;
    }
</style>