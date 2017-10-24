<template>
  <div class="main">
      
      <div class="score">得分：{{score}}</div>
      <canvas id="tetris" class="draw"  ref="draw" width="240" height="420"></canvas>
      <ul class="controls">
        <li class="top">
          <a><i  @click="rotate" class="iconfont icon-fangxiangshang"></i></a>
        </li>
        <li class="continue middle">
          <a @click="moveLeft"><i class="iconfont icon-fangxiangzuo"></i></a>
          <i class="iconfont icon-zanting" v-if="stop" title="暂停" @click="stopOrContinue"></i>
          <i class="iconfont icon-bofang" v-else title="继续" @click="stopOrContinue"></i>
          <a @click="moveRight"><i class="iconfont icon-fangxiangyou"></i></a>
        </li>

        <li class="bottom">
          <a @mousedown="addSpeed" @mouseup="resetSpeed"><i class="iconfont icon-fangxiangxia"></i></a>
        </li>
      </ul>
      <div class="confirm" v-if="againRest">
          <div class="content">
            <div class="title">游戏结束</div>
            <div class="score">最终得分：<span>{{score}}</span></div>
          </div>
          <a class="btns" @click="init">重新开始</a>
        
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
      width: 12rem;
      margin: 0 auto;
      height: 20rem;
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
      width: 8rem;
      height: 6rem;
      //z-index: 99999;
      position: absolute;
      left:4rem;
      top:7.5rem;
      color: white;
      border-radius: .4rem;
      .content{
        padding: .3rem;
        .score{
          font-size: .7rem;
          span{
            color: red;
          }
        }
      }
      
      
      .btns{
        position: absolute;
        bottom:0;
        height: 1.5rem;
        display: block;
        width: 100%;
        background: rgba(255, 255, 255, .7);
        color: red;
        border-bottom-left-radius: .4rem;
        border-bottom-right-radius: .4rem;
      }
    }
  }
  
</style>
