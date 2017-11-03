<template>
    <div class="home">
      <div class="title">{{msg}}</div>
      {{nameGetter}} {{ctxGetter}}
      <a @click="hehe">sadasd</a>
            <!-- <router-link :to="{path:'/game',query:{name:'中文'}}">sadasd</router-link> -->
            {{test[0]}}
      <br>
      <br>
      <span v-for="item in obj3">{{item.name}}   {{item.game}}<br></span>
      <a @click="testOa">校验对象的数组的深浅拷贝</a>

      <pg-icon name="objects-color_controller" class="icon-font1 lunzi" isNormal="0" ></pg-icon>
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
    .icon-font1{
      font-size: 1.4rem;
    }
    .lunzi{
      animation-name:hehe;
      animation-duration: 1s;
      animation-timing-function: linear;
      //animation-delay: 1s;
      animation-iteration-count: infinite;
      // animation: hehe 3s linear infinite;
    }
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
  @keyframes snow {
    0% { opacity: 1; transform: translateX(0); }
    100% { opacity: 1;  transform: translateX(-100%); }
  }  
  @keyframes hehe {
    0%{transform:rotate(0deg);}
    50%{
      transform:rotate(180deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }  
</style>