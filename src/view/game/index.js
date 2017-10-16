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
      ctx:null,//画布对象
      allWindow:{
        timer:null,
        imgs:[],//加载好的图片
        speed:1,//速度级数
      }//全局对象
    }
  },
  computed: {
      ...mapGetters([
        'ctxGetter',
      ])
  },
  methods:{
    ...mapActions([
        'setCtx' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    //创建一个block对象
    createBlock(){
      let self = this 
      var block = new Object()
      block.XandY = [{
        x:0,y:6
      }]//初始坐标位置
      return block;
    },
    //初始化画布
    init(){
      let draw = this.$refs.draw//画布
      this.ctx = draw.getContext('2d')
      this.setCtx(this.ctx)
      this.width = parseInt(draw.getAttribute('width')) // 画布的宽
      this.cellWidth = this.width / 12 // 单元块的边长
      let self = this 
      this.loadImgs([this.isIngImg,this.noIngImg],function(){
          for(var i = 0; i < 20; i ++) { // 初始化矩阵数组
            self.matrix[i] = new Array(12);
            for (var j = 0; j < 12; j ++) {
              self.matrix[i][j] = -1;
                //ctx.fillRect(j * this.cellWidth,i * this.cellWidth,150,75);
                self.ctx.drawImage(self.allWindow.imgs[1], j * self.cellWidth, i * self.cellWidth, '20', '20');
              // ctx.drawImage(this.noIngImg, j * this.cellWidth, i * this.cellWidth, this.noIngImg.width, this.noIngImg.height);
            }
        }
      
        self.run()
      })
    },
    /**
     * 刷新画布，遍历每个格子。根据格子的值来画不同的图
     */
    reflahCavs(){
      var self = this
      self.matrix.forEach(function(col,i){
        if(i==20){
          return false
        }
        for(var j=0; j<col.length;j++){
          var oimg = self.matrix[i][j]<0?self.allWindow.imgs[1]:self.allWindow.imgs[0];
          self.ctx.drawImage(oimg, j * self.cellWidth, i * self.cellWidth, '20', '20');
        }
      })
    },
    //开始游戏
  run(){
    console.info(this.allWindow.imgs)
    console.info("进入到run")
    var self = this 
    var h = 0
    var block = null
    self.allWindow.timer = setInterval(function(){
      /**
       * block.XandY = [{
        x:6*self.cellWidth,y:0
      }]/
       */
        
        if(h==0){
          block = self.createBlock()
        }
        self.matrix[block.XandY[0].x][block.XandY[0].y]=0
        self.reflahCavs()
        self.matrix[block.XandY[0].x][block.XandY[0].y]=-1
        block.XandY[0].x++
        h++
        if(h==20){
          h=0
        }
        
    },1000)
    //this.ctx.drawImage(oimg, 6* self.cellWidth, 0 * self.cellWidth, '20', '20');
  },
  /**
   * 预加载图片
   * 
   * imgs - 加载的图片
   * sw - 屏幕的缩放比例
   * fun - 图片加载完成以后的回调函数
   */
  loadImgs(imgs,fun){
    let self = this
    let l = imgs.length
    let h = 0
    imgs.forEach(function(img,index){
      let imgObject = new Image()
      imgObject.src = img;
      imgObject.onload = function(){
        // this.width = this.width * sw
        // this.height = this.height * sw
        self.allWindow.imgs.push(this)
        h++
        h>=l&&fun()
      }
      
    })
  },
  },
  
  mounted(){
    //this.sets("wangwang")
    this.init()
    //alert("mounted")
  },
}