<template>
    <div class="home">
      <div class="title">
        <span class="t1 animated wobble">欢迎光临</span>——<span class="t2 animated rubberBand">欢乐小bus</span>
      </div>
      <div class="box">
        <div class="bg_home1">
        </div>
        <div class="bg_home2">
        </div>
        <img class="car" src="~assets/images/car.png">
      </div>
        <!-- <div class="bg_home3">
          <img src="~assets/images/home_back.jpg">
        </div>
        <div class="bg_home4">
          <img src="~assets/images/home_back.jpg">
        </div> -->
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
    width: 100%;
    height: 100%;
    color: white;
    background: rgba(178, 255, 237, .4);
    .title{
      color:#f326c5;
      height: 5rem;
      line-height: 10rem;
      font-weight: bold;
      span{
        display: inline-block;
        width: 42%;
      }
      .t1{
        text-align: right;
      }
      .t2{
        text-align: left;
        animation-duration: 2s;
      }
    }
    .box{
      width: 100%;
      height: 27%;
      position: absolute;
      top: 35%;
      overflow: hidden;
      .car{
        height: 50%;
        z-index: 999;
        position: absolute;
        bottom: 1rem;
        left: 30%;
      }
    }
    .bg_home1,.bg_home2,.bg_home3,.bg_home4{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(~assets/images/home_back.jpg) no-repeat;
        background-size: 100% 100%;
        
    }
    .bg_home1{
       //-webkit-transform: translateX(0);
          //transform: translateX(0);
      -webkit-animation: snow 3s linear infinite;
    }
    .bg_home2{
      -webkit-animation: snow2 3s linear infinite;
    }
  }
  @-webkit-keyframes snow {
    0% { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }
    100% { opacity: 1; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
  }
   @-webkit-keyframes snow2 {
    0% { opacity: 1; -webkit-transform: translateX(100%); transform: translateX(100%); }
    100% { opacity: 1; -webkit-transform: translateX(0rem); transform: translateX(0rem); }
  }
  @keyframes snow2 {
    0% { opacity: 1; -webkit-transform: translateX(100%); transform: translateX(100%); }
    100% { opacity: 1; -webkit-transform: translateX(0rem); transform: translateX(0rem); }
  }
  @keyframes snow {
    0% { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }
    100% { opacity: 1; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
  }  
</style>