<template>
<div>
    <div class="title_black">
    </div>
      <div class="banner">
        <swiper :options="swiperOption" class="swp">
            <swiper-slide v-for="item in list" class="banner_item">
                <img :src="item.url">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="main">
        <ul>
          <li class="" v-for="item in tab">
              <i class="iconfont" :class="'icon-'+item.icon"></i>
              <span>{{item.name}}</span>
          </li>
          <div class="clear"></div>
        </ul>
        
      </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test:'',
      swiperOption: { // banner滚动配置
          autoplay: 2000,
          width:window.innerWidth,//宽度等于窗口宽度  其实等于swiper div宽度
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
      },
      list:[
        {
          url:'../../../static/1.jpg'
        },
        {
          url:'../../../static/2.jpg'
        },
        {
          url:'../../../static/3.jpg'
        },
        {
          url:'../../../static/4.jpg'
        },
        {
          url:'../../../static/5.jpg'
        },
      ],
      tab:[
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
        {name:'个人中心',icon:'gerenzhongxin'},
      ]
    }
  },
  computed: {
      
      ...mapGetters([
        'nameGetter',
      ])
  },
  methods:{
    ...mapActions([
        'setName' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    hehe(){
      this.setName("gege")
    }
  },
  mounted(){
    //this.sets("wangwang")
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="stylesheet/less" scoped lang="less">
@import '~assets/css/vali';
.title_black{
  
  background:rgba(0,0,0,.2);
  width: 100%;
  height: 2rem; 
  position: fixed;
  z-index: 3;
}
.banner{
  width: 100%;
  .swp .swiper-wrapper{
  .banner_item{
    img{
      width: 16rem;
    }
  }
  }
  
}
.main{
  width: 95%;
  margin: .7rem auto;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px rgba(0,0,0,.5);
  ul{
    padding:.2rem;
    //width:100%;
    li{
      width: 25%;
      float:left;
      font-size: .7rem;
      i{
        display:block;
        color:orange;
        font-size:1.5rem;
      }
    }
  }
}
</style>