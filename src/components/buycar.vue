<template>
  <div class='main'>
    <transition name="orderList">
        <div class="lists" v-show="showOrder&&orders.length>0">
            <div class="line"></div>
            <div class="listsName">
              <a  @click="clearCar"><pg-icon  name="shanchu" class="closeFont" style="float:left" isNormal="1"></pg-icon></a>
              <pg-icon  name="guanbi2" class="closeFont" isNormal="1" @click="showOrderList"></pg-icon>
              <div class="clear"></div>
            </div>
            <div class="line"></div>
            <ul class="orders">
              <li v-for="item in ordersList"> 
                <div class="name">{{item.name}}</div>
                <div class="orderInfo">
                  <span class="price">{{item.price}}</span>
                  <a @click="remove(item)"><pg-icon  name="jianhao1"  class="icon-font1"  isNormal="1"></pg-icon></a>
                  <span class="buynumber">{{item.buyNumber}}</span>
                  <a @click="addCar(item)"><pg-icon name="roundaddfill" class="icon-font1" isNormal="1" ></pg-icon></a>
                </div>
                <div class="clear"></div>
              </li>
            </ul>
        </div>
    </transition>
      <div class="mainContent">
          <div class="content">
            <div class="car" :class="{'carActive': orders.length>0}" ref="car" @click="showOrderList">
                <div class="tab" v-if="orders.length>0">{{orders.length}}</div>
                <pg-icon  name="cart_fill_light" class="icon-font2" isNormal="1" :class="{'iconActive': orders.length>0}"></pg-icon>
            </div>
            <ul class="carInfo">
                <li class="money">￥{{payMoney}}<span class="line"></span></lic>
                <li class="des" >另需配送费￥4元</li>
                <li class="btn" :class="{'active': roominfo.minPrice-number<=0}" @click="test()">{{showBtnTxt}}</li>
            </ul>
            <div class="clear"></div>
          </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PgBuyCar',
  props:{
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number:0,
      showOrder:false,
    }
  },
  computed:{
    ...mapGetters([
      'roominfo',
      'orders',
    ]),
    payMoney(){
      let number = 0
      for(let i=0;i<this.orders.length;i++){
        let price = this.orders[i].price
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
    ordersList(){
      let list = [];
      let obj ={}
      for(let i = 0 ; i<this.orders.length;i++) {
         var item = this.orders[i]
        if(item.buyNumber>0) {
          if(!obj[item.name]) {
            list.push(item)
            obj[item.name] =1
          }
        }
      }
      return list
    },
  },
  methods:{
    ...mapActions([
        'setName',
        'setCtx',
        'setRoomInfo',
        'setOrders',
    ]),
    tap() {
      this.$emit('click')
    },
    showOrderList(){
      if(!this.showOrder) {
        if(this.orders.length>0) {
          this.showOrder = !this.showOrder
        }
      }else {
        this.showOrder = !this.showOrder
      }
    },
    addCar(obj){
      console.info(obj)
      
      // this.orders.forEach(function(item){
      //   if(item.name==obj.name) {
      //     item.buyNumber+=1
      //   }
      // })
      for(let i = 0 ; i<this.orders.length;i++){
        var hh = this.orders[i]
        if(hh.name==obj.name) {
          this.orders[i].buyNumber= this.orders[i].buyNumber + 1
          obj.description ='1111'
          console.info(this.orders[i].buyNumber)
        }
      }
      this.orders.push(obj)     
    },
    remove(obj){
      for(let i = 0 ; i<this.orders.length;i++){
        let item = this.orders[i]
        if(item.name==obj.name) {
          this.orders.splice(i,1)
          break
        }
      }
      for(let i = 0 ; i<this.orders.length;i++){
        let item = this.orders[i]
        if(item.name==obj.name) {
          item.buyNumber +=-1 
        }
      }
    },
    //清空购物车
    clearCar(){

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
    bottom: 0;
    z-index: 10;
    .lists{
      background: white;
      z-index:-9999;
      .closeFont{
        font-size: 1rem;
        color: #00a0dc;
        float: right;
      }
      .listsName{
        margin:0 1rem;
      }
      .line{
        border-top: 1px solid #ccc;
      }
      .orders{
        margin:0 1rem;
        li{
          border-bottom:1px solid #ccc;
          padding:.3rem 0;
          .name{
            height:1.2rem;
            float:left;
            font-size:.6rem;
            font-weight:bold;
            height: 100%;
            line-height: 1.2rem;
          }
          .orderInfo{
            float: right;
            font-size: 1rem;
            position:relative;
            height:1.2rem;
            span{
              display:inline-block;
            }
            .price{
              color:red;
              margin-right:.8rem;
            }
            .icon-font1{
              font-size: 1rem;
              color:#00a0dc;
            }
            .buynumber{
              font-size: .4rem;
              color: #999;
              margin: 0 .8rem;
              position: relative;
              bottom:.2rem;
            }
          }
        }

      }
    }
    .orderList-enter, .orderList-leave-to{
        transform: translateY(100%);
        opacity: 0;
    }
    .orderList-enter-active, .orderList-leave-active{
        transition: all .3s linear;
    }
    .mainContent{
      z-index: 5999;
      height: 2rem;
      background: #141d27;
      position: relative;
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
