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
    .scrollWap{
        position: relative;
        height: 100%;
        overflow: hidden;
    }
    .active{
        background: white;
        &:after{
            content:none,
        }
    }
    ul{
        width: 100%;
        font-size: 12px;
        position: relative;
        li{
            width: 100%;
            height: 2rem;
            position: relative;
            display:table;
            box-sizing: border-box;
            padding: 10px;
            .name{
                display: table-cell;
                vertical-align: middle;
            }
            &:after{
                position: absolute;
                bottom: 0;
                width:85%;
                left:.3rem;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                content:'',
            }
        }
    }
  }  
</style>