<template>
  <div class="main">
      <div class="content">
        <div class="car">
          <pg-icon name="cart_fill_light" class="icon-font2" isNormal="1"></pg-icon>
        </div>
        <ul class="carInfo">
            <li class="money">￥9999<span class="line"></span></lic>
            <li class="des">另需配送费￥4元</li>
            <li class="btn" @click="test()">￥0元起送</li>
        </ul>
        <div class="clear"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PgBuyCar',
  props:{
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    tap() {
      this.$emit('click')
    },
    test(){
      console.info(111)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~assets/css/vali';
  .main{
    width: 100%;
    position: absolute;
    bottom: 0%;
    height: 2rem;
    z-index: 999;
    background: #141d27;
    .content{
      margin: 0 1rem;
      .car{
        height: 1.7rem;
        width: 1.7rem;
        position: absolute;
        bottom: .4rem;
        left:1rem;
        border-radius: 50%;
        line-height: 1.7rem;
        border: .3rem solid #141d27;
        background: #2b343c;
        .icon-font2{
          font-size: 1.2rem;
          color:#80858a;
        }
      }
      .carInfo{
        position:absolute;
        right:0;
        height: 100%;
        font-size: .6rem;
        display: flex;
        line-height: 2rem;
        color: rgba(255,255,255,0.4);
        .btn{
          width: 4rem;
          background: #2b343c;
        }
        .des{
          width: 5rem;
        }
        .money{
          width:3.5rem;
          font-size: .8rem;
          .line{
            border-left: 1px solid rgba(255,255,255,0.4);
            float:right;
            height:1rem;
            margin-top:.5rem;
            display:line-block;
          }
        }
      }
    }
  }
</style>
