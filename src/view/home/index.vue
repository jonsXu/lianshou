<template>
    <pg-wrapper class="home">
      <div class="title">
        <span class="t1 animated wobble">欢迎登乘</span> —— 
        <span class="t2 animated fadeInLeft">
          旅途小bus
          <pg-icon name="luntai" class="lunzi l1" isNormal="0" ></pg-icon>
          <pg-icon name="luntai" class="lunzi l2" isNormal="0" ></pg-icon>
        </span>
        
      </div>
      <div class="box">
        <div class="bg_home1">
        </div>
        <div class="bg_home2">
        </div>
        <img class="car" src="~assets/images/car.png">
      </div>
        <ul class="btns animated bounceInDown">
            <li>
              <router-link to='/test'>
                <span>美食轰趴</span>
                <pg-icon name="meishijiayin" class="icon-font1" isNormal="0" ></pg-icon>
                <!-- <svg class="icon icon-font1" aria-hidden="true">
                  <use xlink:href="#icon-meishijiayin"></use>
                </svg> -->
              </router-link>
            </li>
          
            <li>
              <router-link to='/game'>
                <span>轻松一刻</span>
                <pg-icon name="objects-color_controller" class="icon-font1" isNormal="0" ></pg-icon>
              </router-link>
            </li>
         
        </ul>
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
    width: 100%;
    height: 100%;
    color: white;
    background: rgba(178, 255, 237,0.6);
    .icon-font1{
      font-size: 1.4rem;
    }
    .title{
      color:#f326c5;
      span{
        color:#f326c5;
      }
      .lunzi{
        font-size: 19px;
        position: absolute;
        top: 53%;
        animation-name:roate;
        animation-duration: 1s;
        animation-timing-function: linear;
        //animation-delay: 1s;
        animation-iteration-count: infinite;
      }
      .l1{
        right: 5.8rem;
      }
      .l2{
        right:1.8rem;
      }
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
        animation-delay:1s;
        position: relative;
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
    .bg_home1,.bg_home2,{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(~assets/images/home_back.jpg) no-repeat;
        background-size: 100% 100%;
        
    }
    .bg_home1{
       //-webkit-transform: translateX(0);
          //transform: translateX(0);
      animation: snow 3s linear infinite;
    }
    .bg_home2{
      animation: snow2 3s linear infinite;
    }
    .btns{
      animation-duration: 2s;
      animation-delay:2.5s;
      position: absolute;
      width: 100%;
      top:75%;
      display: flex;
      height: 2rem;
      li{
        flex: 1;
        a{
          display: block;
          height: 1.5rem;
          width: 80%;
          margin: 0 auto;
          border: 1px solid rgba(114, 210, 121, .7);
          border-radius: 4px;
          background: rgba(114, 210, 121, .7);
          line-height: 1.5rem;
          span{
            color: white;
            
          }
          
        }
      }
    }
  }
  // @-webkit-keyframes snow {
  //   0% { opacity: 1; -webkit-transform: translateX(0); transform: translateX(0); }
  //   100% { opacity: 1; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
  // }
  //  @-webkit-keyframes snow2 {
  //   0% { opacity: 1; -webkit-transform: translateX(100%); transform: translateX(100%); }
  //   100% { opacity: 1; -webkit-transform: translateX(0rem); transform: translateX(0rem); }
  // }
  /*
    -webkit-transform: translateX(0rem);
    -webkit-transform: translateX(100%);
  */
  @keyframes snow2 {
    0% { opacity: 1;  transform: translateX(100%); }
    100% { opacity: 1;  transform: translateX(0); }
  }
  @keyframes snow {
    0% { opacity: 1; transform: translateX(0); }
    100% { opacity: 1;  transform: translateX(-100%); }
  }
   @keyframes roate {
    0%{transform:rotate(0deg);}
    50%{
      transform:rotate(180deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }    
</style>