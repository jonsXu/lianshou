<template>
    <div class="main">
        <div class="scrollWap" ref="scrollWap">
            <ul>
                <li class="" @click="menuClick(ide)" v-for="(item,ide) in datas" :class="{'active': index==ide}">
                    <span class="name"> {{item.name}}</span>
                    <div class="line"></div>
                </li>
            </ul>
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
  .main{
    background: #f3f5f7;
    position: relative;
    width: 100%;
    height: 100%;
  }  
</style>