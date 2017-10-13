import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'game',
  data () {
    return {
      isIngImg:'../../../static/cell.png',
      noIngImg:'../../../static/null.png',
      width:0,//画布的宽
      cellWidth:0,//单元块的边长
      matrix: new Array(20),
    }
  },
  computed: {
      // ...mapGetters([
      //   'nameGetter',
      // ])
  },
  methods:{
    ...mapActions([
        'setName' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    hehe(){
      this.setName("gege")
    },
    init(){
      let draw = this.$refs.draw//画布
      var ctx = draw.getContext('2d')
      this.width = parseInt(draw.getAttribute('width')) // 画布的宽
      this.cellWidth = this.width / 12 // 单元块的边长
      var oimg = new Image();
      oimg.src = this.noIngImg;
      console.log(oimg)
      var self = this
      oimg.onload= function(){
          for(var i = 0; i < 20; i ++) { // 初始化矩阵数组
            self.matrix[i] = new Array(12);
            for (var j = 0; j < 12; j ++) {
              self.matrix[i][j] = -1;
                //ctx.fillRect(j * this.cellWidth,i * this.cellWidth,150,75);
                ctx.drawImage(oimg, j * self.cellWidth, i * self.cellWidth, '20', '20');
              // ctx.drawImage(this.noIngImg, j * this.cellWidth, i * this.cellWidth, this.noIngImg.width, this.noIngImg.height);
            }
        }
      }
    }
  },
  mounted(){
    //this.sets("wangwang")
    this.init()
    //alert("mounted")
  },
  beforeUpdate(){
    alert("11")
    this.init()
  }
}