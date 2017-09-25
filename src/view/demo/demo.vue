<template>
<div>
    <div class="banner">
      <swiper :options="swiperOption" class="swp">
          <swiper-slide  class="banner_item">
              <div class="box" style="background-color: red"></div>
          </swiper-slide>
          <swiper-slide class="banner_item">
              <div class="box" style="background-color: green"></div>
          </swiper-slide>
          <swiper-slide  class="banner_item">
              <div class="box" style="background-color: yellow"></div>
          </swiper-slide>
          <swiper-slide  class="banner_item">
              <div class="box" style="background-color: blue"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'demo',
  data () {
    return {
      swiperOption: { // banner滚动配置
          //autoplay: 2000,
          //width:window.innerWidth,
          //loop: true,
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
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="stylesheet/less" scoped lang="less">
@import '~assets/css/vali';
.banner{
  margin: 0 auto; 
 width: 80%;
  .swp .swiper-wrapper{
    
  .banner_item{
     width: 16rem;
    .box{
      width: 16rem;
      height:8rem;
    }
  }
  }
  
}
</style>