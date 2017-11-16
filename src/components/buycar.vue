<template>
  <div class="main">
      <div class="content">
        <div class="car" :class="{'carActive': order.length>0}" ref="car">
            <div class="tab" v-if="order.length>0">{{order.length}}</div>
            <pg-icon  name="cart_fill_light" class="icon-font2" isNormal="1" :class="{'iconActive': order.length>0}"></pg-icon>
        </div>
        <ul class="carInfo">
            <li class="money">￥{{payMoney}}<span class="line"></span></lic>
            <li class="des" >另需配送费￥4元</li>
            <li class="btn" :class="{'active': roominfo.minPrice-number<=0}" @click="test()">{{showBtnTxt}}</li>
        </ul>
        <div class="clear"></div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PgBuyCar',
  props:{
    order: {
        type: Array,
        default: []
      },
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number:0,
    }
  },
  computed:{
    ...mapGetters([
      'roominfo',
    ]),
    payMoney(){
      let number = 0
      for(let i=0;i<this.order.length;i++){
        let price = this.order[i].price
        number += price 
      }
      this.number = number
      return number
    },
    showBtnTxt(){
      let text = "￥"+this.roominfo.minPrice+"元起送"
      if(this.roominfo.minPrice-this.number>0){
        text = "￥"+(this.roominfo.minPrice-this.number)+"元起送"
      } else {
        text = "去结算"
      }
      return text
    },
  },
  methods:{
    tap() {
      this.$emit('click')
    },
    test(){
      console.info(111)
    }
  },
  watch:{
    number(curVal,oldVal){
      let carDoc = this.$refs.car;
      let classes = carDoc.className.split(' ')
      if(curVal>oldVal){
        if(carDoc.className.indexOf('flybox')) {
          carDoc.className= classes[0]+' '+classes[1]
        }
        carDoc.className= classes[0]+' '+classes[1]+ ' flybox' 
        
      }
      setTimeout(function(){
          carDoc.className= classes[0]+' '+classes[1]
      },100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '~assets/css/vali';
  .tab{
    position: absolute;
    height: .7rem;
    width: .7rem;
    background: red;
    color: white;
    font-size: .5rem;
    border-radius: 50%;
    right: 0;
    line-height: .7rem;
  }
  .main{
    width: 100%;
    position: absolute;
    bottom: 0%;
    height: 2rem;
    z-index: 999;
    background: #141d27;

    .content{
      margin: 0 1rem;
      .flybox{
            animation: bounce-in .1s;
            animation-timing-function:ease-in;
        }
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
        .iconActive{
          color: white;
        }
      }
      .carActive{
        background: #00a0dc;
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
        .active{
          color: white;
          background: green;
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
  @keyframes bounce-in {
      0%{
          transform: scale(1,1)
      }
      50%{
          transform: scale(.7,.7);
      }
      100%{
          transform:scale(1,1) ;
      }
  }  
</style>
