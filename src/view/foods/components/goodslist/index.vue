<template>
    <div class="main">
        <div class="goodsL" ref="goods">
            <ul>
                <li v-for="(item1,index1) in data" class="types">
                    <div class="typeTitle">{{item1.name}}</div>
                    <ul>
                        <li v-for="(item2,index2) in item1.foods" class="goodsConten">

                            <div class="iconImg"><img :src="item2.icon"></div>
                            <div class="goodsDesc">
                                <h3 v-on:click="move($event)">{{item2.name}}</h3>
                                <div class="des">{{item2.description}}</div>
                                <div class="sellInfo"><span>月售{{item2.sellCount}}份</span> <span>好评率{{item2.rating}}%</span></div>
                                <div class="buyInfo">
                                    <span class="price">￥{{item2.price}}</span>
                                </div>
                            </div>
                            <div class="buy">
                                <transition name="jian">
                                    <a v-on:click="move(index1,index2,$event)" style="float:left" v-show="item2.buyNumber&&item2.buyNumber>0">
                                        <pg-icon  name="jianhao1"  class="icon-font1"  isNormal="1"></pg-icon>
                                    </a>
                                </transition>
                                <!-- v-if="item2.buyNumber&&item2.buyNumber>0" -->
                                <div class="buyNumber" v-if="item2.buyNumber&&item2.buyNumber>0">{{item2.buyNumber}}</div>
                                <a @click="add(index1,index2,$event)" style="float:right" class="jia">
                                    <pg-icon name="roundaddfill" class="icon-font1 " isNormal="1"  ></pg-icon>
                                </a>
                            </div>
                        </li>
                    </ul>
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
    background: white;
    position: relative;
    height: 100%;
    .goodsL{
        position: relative;
        height: 100%;
        overflow: hidden;
        .types{
            font-size: .5rem;
            .typeTitle{
                padding: 0 1rem;
                color: #93999f;
                background: #f3f5f7;
                text-align: left;
                border-left: 2px solid #93999f;
            }
            .goodsConten{
                padding: .8rem 0 ;
                margin: 0 1rem ;
                border-bottom: 1px solid rgba(7,17,27,0.1);
                display: flex;
                position: relative;
                .iconImg{
                    width: 2.5rem;
                    height: 2.5rem;
                    img{
                        height: 100%;
                    }
                    margin-right: 1rem;
                }
                .goodsDesc{
                    color:#93999f;
                    text-align: left;
                    h3{
                        color: black;
                    }
                    div{
                        margin: .2rem 0;
                    }
                    .sellInfo{
                        span{
                            display: inline-block;
                        }
                    }
                    .buyInfo{
                        font-size: 1rem;
                        .price{
                            color: red;
                            float: left;
                        }
                    }
                }
                .buy{
                    position: absolute;
                    right: 0;
                    bottom: .5rem;
                    width: 3.5rem;
                    .buyNumber{
                        display: inline-block;
                        font-size: 1rem;
                    } 
                    .jian-enter, .jian-leave-to{
                        transform:  translateX(2.5rem) rotate(360deg);
                        opacity: 0;
                    }
                    .jian-enter-active, .jian-leave-active{
                        //transform:rotate(180deg);
                        transition: all .3s linear;
                    }
                    a{
                        display: inline-block;
                        .icon-font1{
                            font-size: 1rem;
                            color: #00a0dc;
                        }
                        

                    }
                    
                    
                    
                }
            }
            .goodsConten:last-child{
                border:none;
            }
        }
    }
  }  
</style>