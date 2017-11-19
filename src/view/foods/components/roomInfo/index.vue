<template>
    <div class="box">
        <div class="info">
            <img :src="form.avatar"  class="roomImg">
            <div class="text">
                <div class="title">
                    <span class="img"></span><span>{{form.name}}</span>
                    <!-- <img src="static/brand@2x.png" srcset="static/brand@3x.png 2x"> -->
                    
                </div>
                <div class="timeDes">{{form.description}}/{{form.deliveryTime}}分钟内送达</div>
                <div class="descri">
                    <div class="benefit">
                        <img src="static/decrease_1@2x.png" srcset="static/decrease_1@3x.png 2x"><span>{{form.supports[0].description}}</span>
                    </div>
                    <a class="benefitNum" @click="show">{{form.supports.length}}个 ></a>
                    <div class="clear"></div>
                </div>
            </div>
            
        </div>
        <div class="message">
            <img src="static/bulletin@2x.png" srcset="static/bulletin@3x.png 2x"><span class="noticeContent">{{form.bulletin}}</span><span class="jian">></span>
        </div>
        <div class="headBg">
            <img :src="form.avatar" width="100%" height="100%" >
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
  .box{
      width: 100%;
      position: relative;
      color: white;
      background: rgba(7,17,27,0.5);
      .info{
        width: 100%;
        position: relative;
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
        z-index: 1;
        .roomImg{
            margin-right: 1rem;
            display: block;
            height: 3rem;
            width: 3rem;
        }
        .text{
            width: 100%;
            .title{
            font-size: 16px;
            text-align: left;
                span{
                    display: inline-block;
                    vertical-align: top;
                    line-height: 1rem;
                    font-weight: bold;
                }
                .img{
                    width: 30/18rem;
                    height: 1rem;
                    background-size: 30/18rem 1rem;
                    background-repeat: no-repeat;
                    //background-image:-webkit-image-set(url(~static/brand@2x.png) 1x,url(~static/brand@3x.png) 2x);
                    background-image: url(~static/brand@2x.png);
                    margin-right: .5rem;
            }
        }
        .timeDes{
            font-size: .5rem;
            text-align: left;
            margin:.25rem 0 ;
        }
        .descri{
            width: 100%;
            font-size: .5rem;
            height: 1rem;
            .benefit{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                width: 70%;
                float: left;
                text-align: left;
                img{
                    height: 14px;
                    width: 14px;
                    vertical-align:bottom;
                }
                span{
                    display: inline-block;
                    margin-left: .5rem;
                    
                }
            }
            .benefitNum{
                float: right;
                height: 100%;
                width: 2rem;
                background: rgba(7,17,27,0.5);
                border-radius: .5rem;
                line-height: 1rem;
            }
        }
        }
        
      }
      .message{
          width: 100%;
          z-index: 1;
          position: relative;
          text-align: left;
          background: rgba(7,17,27,0.2);
          height: 1rem;
          padding:0 1rem;
            box-sizing: border-box;
          img{
              margin-right:.5rem;
              display: inline-block;
              width: 22px;
              height: 12px;
              float:left;
              margin-top:.25rem;
          }
          .noticeContent{
            display: inline-block;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width: 75%;
            font-size: 12px;
            height: 100%;
            line-height: 1rem;
          }
      }
      .headBg{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        filter: blur(10px);
        
      }
  }  
</style>