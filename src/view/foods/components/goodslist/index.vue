<template>
    <div class="main">
        <div class="goodsL" ref="goods">
            <ul>
                <li v-for="item1 in data" class="types">
                    <div class="typeTitle">{{item1.name}}</div>
                    <ul>
                        <li v-for="item2 in item1.foods" class="goodsConten">
                            <div class="iconImg"><img :src="item2.icon"></div>
                            <div class="goodsDesc">
                                <h3>{{item2.name}}</h3>
                                <div class="des">{{item2.description}}</div>
                                <div class="sellInfo"><span>月售{{item2.sellCount}}份</span> <span>好评率{{item2.rating}}%</span></div>
                                <div class="buyInfo">
                                    <span class="price">￥{{item2.price}}</span>
                                    <div class="buy">
                                        <pg-icon name="roundaddfill" class="icon-font1" isNormal="1" ></pg-icon>
                                    </div>
                                </div>
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
                        font-size: .6rem;
                        .price{
                            color: red;
                            float: left;
                        }
                        .buy{
                            float: right;
                            .icon-font1{
                                font-size: .6rem;
                                color: #00a0dc
                            }
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