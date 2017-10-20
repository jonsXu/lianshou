<template>
    <div class="home">
      <div class="title">{{msg}}</div>
      {{nameGetter}} {{ctxGetter}}
      <a @click="hehe">sadasd</a>
            <!-- <router-link :to="{path:'/game',query:{name:'中文'}}">sadasd</router-link> -->
            {{test[0]}}
        <canvas id="c1">  
          <span>不支持canvas浏览器</span>  
      </canvas>
    </div>
</template>

<script>
import demotwo from './demo2'
    export default {
        ...demotwo
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