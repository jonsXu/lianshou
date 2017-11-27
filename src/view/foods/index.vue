<template>
    <pg-wrapper class="home">
      <room-info class="header" :form="data.seller" @show="show"></room-info>
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
        <goods-list class="goodslist" :list="data.goods" :typeIndex="typeIndex" @change-index="listTypeChange" @add="add" @remove="remove"></goods-list>
      </div>
      <pg-buy-car :list="data.goods"></pg-buy-car>
      <pg-confirm v-if="showBox" class="confirmBox">
        <div class="headBox">
          <h4>{{data.seller.name}}</h4>
        </div>
        <ul class="score">
          <li  v-for="n in 5" >
            <img v-if="n<=Math.round(data.seller.score)" src="~static/star48_on@2x.png" srcset="static/star48_on@3x.png 2x">
            <img v-else src="~static/star48_off@2x.png" srcset="static/star48_off@3x.png 2x">
          </li>
        </ul>
        <div class='message'><span class="line"></span><span class="name">优惠信息</span><span class="line"></span></div>
        <ul class="msgContent">
          <li v-for="(item,n) in data.seller.supports">{{n+1}}、{{item.description}}</li>
        </ul>
        <div class='message'><span class="line"></span><span class="name">商家公告</span><span class="line"></span></div>
        <div class="desContent">{{data.seller.bulletin}}</div>
        <div class="close">
          <a @click="showBox=!showBox"><pg-icon name="guanbi2" class="guanFont" isNormal="1" ></pg-icon></a>
          
        </div>
      </pg-confirm>
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
    .confirmBox{
      .headBox{
        margin-top: 3rem;
        font-size:20px;
      }
      .score{
        display: flex;
        margin: .5rem 3rem 0;
        li{
          flex:1;
        }
      }
      .message{
        margin-top: .3rem;
        span{
          display:inline-block;
        }
        .line{
          width: 5rem;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          margin-bottom: 8px;
        }
        .name{
          font-size:20px;
          margin: 0 1rem;
        }
      }
      .msgContent{
        margin: 1rem 2rem 0;
        font-size: 14px;
        li{
          text-align:left;
          margin-bottom:.7rem;
        }
      }
      .desContent{
        margin: .3rem 2rem 0;
        font-size: .7rem;
        text-align: left;
        line-height: 1rem;
      }
      .close{
        .guanFont{
          font-size: 1rem;
          margin-top:1rem;
          color: rgba(255,255,255,0.5);
        }
      }
    }
  }  
</style>