<template>
  <div class="main">
      
      <div class="score">得分：{{score}}</div>
      <canvas id="tetris" class="draw"  ref="draw" width="240" height="420"></canvas>
      <ul class="controls">
        <li class="top">
          <a>
            <i  @click="rotate" class="iconfont icon-fangxiangshang" v-if="stop"></i>
            <i class="iconfont icon-fangxiangshang" v-else></i>
          </a>
        </li>
        <li class="continue middle">
          <a>
            <i @click="moveLeft" class="iconfont icon-fangxiangzuo" v-if="stop"></i>
            <i class="iconfont icon-fangxiangzuo" v-else></i>
          </a>
          <i class="iconfont icon-zanting" v-if="stop" title="暂停" @click="stopOrContinue"></i>
          <i class="iconfont icon-bofang" v-else title="继续" @click="stopOrContinue"></i>
          <a>
            <i  @click="moveRight" class="iconfont icon-fangxiangyou" v-if="stop"></i>
            <i   class="iconfont icon-fangxiangyou" v-else></i>
          </a>
        </li>

        <li class="bottom">
          <a>
            <i  @click="changeSpeed" class="iconfont icon-fangxiangxia" v-if="stop"></i>
            <i class="iconfont icon-fangxiangxia" v-else></i>
          </a>
        </li>
      </ul>
      <div class="confirm" v-if="againRest">
          <div class="content">
            <div class="title">游戏结束</div>
            <div class="score">最终得分：<span>{{score}}</span></div>
             <a class="btns" @click="init">
               重新开始
            </a>
          </div>
         
        
      </div>
  </div>
</template>
<script>
import index from './index'
    export default {
        ...index
    }
</script>
<style type="stylesheet/less" scoped lang="less">
@import '~assets/css/vali';
  .main{
    position: relative;
    height: 100%;
    background: url('~assets/images/gameBg.jpg') no-repeat 100%;
    .score{

    }
    .gameOver{
      color: red;
    }
    .draw{
      //width: 12rem;
      margin: 0 auto;
      //height: 20rem;
      img{
        width: 1rem;
        height: 1rem;
      }
    }
    .controls{
      width: 6rem;
      height: 4.5rem;
      margin: 0 auto;
      position: relative;
      i{
        font-size: 1.5rem;
      }
      li{
        
      }
    }
    .confirm{
      //0,191,201
      background:rgba(0, 0, 0, .4);
      width: 100%;
      height: 100%;
      //z-index: 99999;
      position: fixed;
      left:0;
      top:0;
      .content{
        padding: .3rem;
        height: 6rem;
        width: 8rem;
        background: whitesmoke;
        border-radius: .4rem;
        position: relative;
        margin: 50% auto;
        .score{
          font-size: .7rem;
          span{
            color: red;
          }
        }
         .btns{
            position: absolute;
            bottom:0;
            right:0;
            height: 1.5rem;
            display: block;
            margin: auto;
            width: 100%;
            background-color:#281415;
            color: white;
            border-bottom-left-radius: .4rem;
            border-bottom-right-radius: .4rem;
          }
      }
      
      
     
    }
  }
  
</style>
