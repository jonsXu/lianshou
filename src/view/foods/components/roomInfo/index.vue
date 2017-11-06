<template>
    <div class="box">
        <div class="info">
            <img :src="form.avatar" height="64" width="64" class="roomImg">
            <div class="text">
                <div class="title">
                    <span class="img"></span><span>{{form.name}}</span>
                    <!-- <img src="static/brand@2x.png" srcset="static/brand@3x.png 2x"> -->
                    
                </div>
                <div class="timeDes">{{form.description}}/{{form.deliveryTime}}分钟内送达</div>
            </div>
            
        </div>
        <div class="message"></div>
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
        display: flex;
        padding: 1rem;
        z-index: 1;
        .roomImg{
            margin-right: 1rem;
        }
        .title{
            font-size: 16px;
            span{
                display: inline-block;
                vertical-align: top;
                line-height: 18px;
                font-weight: bold;
            }
            .img{
                width: 30px;
                height: 18px;
                background-size: 30px 18px;
                background-repeat: no-repeat;
                background-image: url(~static/brand@2x.png);
                margin-right: 1rem;
            }
        }
        .timeDes{
            font-size: 14px;
            text-align: left;
            margin:10px 0 ;
        }
      }
      .message{
          width: 100%;
          z-index: 1;
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