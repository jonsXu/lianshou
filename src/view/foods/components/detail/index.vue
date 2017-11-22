<template>
    <pg-wrapper class="mainC">
        <div class="scrollDetail" ref="scrollDetail">
            <div>
                <div class="foodImg">
                    <img :src="datas.image">
                </div>
                <div class="info">
                    <div class="name">{{datas.name}}</div>
                    <div class="sellInfo">
                        <span>月售{{datas.sellCount}}</span>
                        <span>好评率{{datas.rating}}%</span>
                    </div>
                    <div class="priceInfo">
                        <span class="price">￥{{datas.price}}</span>
                        <router-link to='/game'>加入购物车</router-link>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="descriDiv">
                    <div class="lable">商品介绍</div>
                    <div class="descCon">{{datas.info}}</div>
                </div>
                <div class="assess">
                    <div class="lable">商品评价</div>
                    <div class="assessLabels">
                        <div class="labelBox item" :class="{'active':showIndex==1}" @click="showAssess(1)">全部{{allNum}}</div>
                        <div class="labelBox item" :class="{'active':showIndex==2}" @click="showAssess(2)">推荐{{goodNum}}</div>
                        <div class="labelBox itemBad" :class="{'activeBad':showIndex==3}" @click="showAssess(3)">吐槽{{badNum}}</div>
                    </div>
                    <div class="onlyContent">
                        <pg-icon name="roundcheckfill" class="defaultFont"></pg-icon>
                        <span class="onlyTxt">只看有内容的评价</span>
                    </div>
                    <ul class="assessList">
                        <li  v-for="item in datas.ratings">
                            <div class="rateTime">
                                <div class="time">2017-05-09 19:27:33</div>
                                <div class="user">{{item.username}}</div>
                                <div class="clear"></div>
                            </div>
                            <div class="assessMsg">
                                <div class="msgIcon">
                                    <pg-icon name="appreciate_fill_light" class="defaultFont"></pg-icon>
                                </div>
                                <div class="msg">{{item.text}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <pg-buy-car ></pg-buy-car>
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
  .mainC{
    background: #f3f5f7;
    position: relative;
    width: 100%;
    height: 100%;
    .scrollDetail{
        width: 100%;
        height: 93%;
        position:absolute;
        top:0;
        left:0;
        overflow: hidden;
    }
    .foodImg{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .info{
        padding: .7rem;
        background: white;
        text-align: left;
        .name{
            font-size: .7rem;
            font-weight:bold;
        }
        .sellInfo{
            color:#93999f;
            font-size: .5rem;
            margin: .5rem 0 1.2rem 0;
            span{
                margin-right:.5rem;
            }
        }
        .priceInfo{
            line-height: 1rem;
            .price{
                font-size: .7rem;
                color:red;
                float:left;
                display:inline-block;
                height: 1rem;
            }
            a{
                background: #00a0dc;
                font-size: .5rem;
                float: right;
                display: inline-block;
                width: 4rem;
                height: 1rem;
                border-radius: .5rem;
                text-align: center;
                color:white;
            }
        }
    }
    .descriDiv{
        margin:1rem 0;
        padding: .7rem;
        background: white;
        text-align: left;
        .lable{
            font-size: .6rem;
        }
        .descCon{
            color:#4d555d;
            font-size: .5rem;
            padding-left:.2rem;
            margin: .5rem 0;
        } 
    }
    .assess{
        padding-top:1rem;
        background: white;
        text-align: left;
        .lable{
            font-size: .6rem;
            margin:0 .7rem;
        }
        .assessLabels{
            font-size: .5rem;
            margin:1rem .7rem 0;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ccc;
            .labelBox{
                width: 3rem;
                height:1.3rem;
                text-align:center;
                line-height:1.3rem;
                display:inline-block;
                margin-right:.6rem;
            }
            .item{
                background: rgba(0,160,220,0.2);
                color:#4d555f;
            }
            .itemBad{
                background: rgba(77,85,93,0.2);
                color:#4d555f;
            }
            .active{
                color: #fff;
                background: #00a9dc;
            }
            .activeBad{
                color: #fff;
                background: #4d555d
            }
        }
        .onlyContent{
            padding: .3rem 1rem;
            color:#93999f;
            position: relative;
            border-bottom: 1px solid #ccc;
            .onlyTxt{
                display: inline-block;
                height:100%;
                font-size: .5rem;
                line-height: 1rem;
                margin-left:.3rem;
                position: absolute;
            }
            .defaultFont{
                font-size: 1rem;
                color:#93999f;
            }
        }
        .assessList{
            li{
                .rateTime{
                    color:#93999f;
                    font-size:.5rem;
                    .time{
                        float:left;
                    }
                    .user{
                        float: right;
                    }
                }
                
            }
        }
    }
  }  
</style>