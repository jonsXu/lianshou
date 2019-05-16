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
        <div class="hehes"></div>
        <div >
          
          <!-- <div class="uplaodDiv">
            <input type="text" v-model="fileName"/>
            <button class="button">
              <input type="file" class="uplaod" @change="uplaodFile" accept="/image/*" mutiple="mutiple" capture="camera">上传
            </button>
            
          </div> -->
          <video src="http://www.w3school.com.cn/i/movie.ogg" controls="controls" class="videos"></video>
        </div>
      </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'yiyao',
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
      ],
      fileName:'',
      File:null,
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
    },
    uplaodFile(event){
      console.info(event)
      console.info(event.target.value)
      this.fileName = event.target.files[0].name
      this.File = event.target.files[0]
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
.hehes{
  height: 200px;
  background: url('~assets/images/1.jpg') no-repeat 100%;
}
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
  .uplaodDiv{

    position: relative;
    //background-image: url(~static/brand@2x.png); 
    .uplaod{
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0;
    }
    .button{
      border: none;
      background: #3385ff;
      border-radius: 0.3rem;
      color: white;
      position: relative;
    }
  }
}
.videos{
  
}
</style>