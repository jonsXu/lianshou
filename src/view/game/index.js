import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'game',
  data () {
    return {
      isIngImg:'../../../static/cell.png',
      noIngImg:'../../../static/null.png',
      width:0,//画布的宽
      cellWidth:0,//单元块的边长
      matrix: [new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),new Array(12),],
      ctx:null,//画布对象
      noWblock:null,//当前正在下落的方块
      newFlag:true,//是否新生成一个方块
      
      defr:0,//下落延迟  ,
      allWindow:{
        timer:null,
        imgs:[],//加载好的图片
        speed:25,//速度级数
      },//全局对象
      test:[1,2]
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
      self.matrix[block.XandY[0].x][block.XandY[0].y]=0
      return block;
    },
    setMatRix(i,j,number){
      let self = this
      //self.matrix[i][j] = number;
      self.$set(self.matrix[i],j,number)
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
            for (var j = 0; j < 12; j ++) {
              self.setMatRix(i,j,-1);
                //ctx.fillRect(j * this.cellWidth,i * this.cellWidth,150,75);
              self.ctx.drawImage(self.allWindow.imgs[1], j * self.cellWidth, i * self.cellWidth, '20', '20');
              // ctx.drawImage(this.noIngImg, j * this.cellWidth, i * this.cellWidth, this.noIngImg.width, this.noIngImg.height);
            }
        }
      
        self.run()
      })
      self.moveBlock()
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
      //var h = 0
      self.noWblock = self.createBlock()
      self.reflahCavs()
      self.allWindow.timer = setInterval(function(){
        /**
         * block.XandY = [{
          x:6*self.cellWidth,y:0
        }]/
        */
          self.dropStop()
          self.reflahCavs()
          
      },40)
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
    //方块下落停止
    dropStop(){
      let self = this 
      if(self.defr == self.allWindow.speed) {
      //如果到底部 或者碰到一个方块了 就重新生成方块开始移动
        if(self.noWblock.XandY[0].x==19 || self.matrix[self.noWblock.XandY[0].x+1][self.noWblock.XandY[0].y]==1){
          self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,1)
          //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=1
          self.noWblock = self.createBlock()
          self.newFlag = true
        }else {
        //否则就继续移动，移动中的方块的 值=0
        /**
       * 为什么给这个defr延迟，是为了让下落方块的基础时间为1秒下落一次，
       * 基础速度为25，刷新时间为40ms每次。
       * 定时器内执行下落方法，每40ms就执行一次下落方法，每次执行都给defr+1.
       * 等到defr==速度极数 就是25，的时候  才会执行一次下落逻辑。
       * 这个时候40ms*25=1000ms =1秒。
       * 用40ms的刷新是为了让每次移动也能看到移动的轨迹
       * 
          * self.allWindow.timer = setInterval(function(){
            /**
             * block.XandY = [{
              x:6*self.cellWidth,y:0
            }]
            
            self.dropStop()
            self.reflahCavs()
            
        },40)
       */
            self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,-1)
            // self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=-1
            self.noWblock.XandY[0].x++
            self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,0)
            //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=0
            self.newFlag = false
          }
          //self.test.push(1)
          self.defr = 0
        } else{
          self.defr++
        }
      
      
    },
    //按键控制移动 37左 ，39右 38上  40 下
    moveBlock(){
      let self = this 
      document.onkeydown = function(event){
        if(event.keyCode==37){
          //左移动
          if(self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y-1]==1||self.noWblock.XandY[0].y==0){
            //如果往左移动的时候 碰到一个实体方块，或者当前已经在最左边了，就停止移动
            return false
          } else{
            self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,-1)
            //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=-1
            self.noWblock.XandY[0].y--
            self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,0)
            //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=0
          }
        } else if(event.keyCode==39) {
          ///右移动
          if(self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y+1]==1||self.noWblock.XandY[0].y==11){
            //如果往右移动的时候 碰到一个实体方块，或者当前已经在最右边了，就停止移动
            return false
          } else{
            self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,-1)
            //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=-1
            self.noWblock.XandY[0].y++
            self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,0)
            //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=0
          }
        } else if(event.keyCode==40) {
          //如果当按下的键为↓的时候，就把速度等级设置为1级。把延迟设置为1这样 1 = 1，就不会延迟了  那么就直接40ms就刷新一次 下降的时间就是40ms下一格
          self.allWindow.speed = 1 
          self.defr = 1
        }
      }
      document.onkeyup = function(event) {
        //监听按键的放开事件，
        if(event.keyCode==40) {
          //当放开的为↓的时候，就把值恢复到原来的样子
          self.allWindow.speed = 25 
          self.defr = 0
        }
      }
    }
    
  },
  
  mounted(){
    //this.sets("wangwang")
    this.init()
    //alert("mounted")
  },
  watch:{
    matrix:{
      handler: function () {
        //满一行减掉
        console.info(111);
        let self = this
        self.matrix.forEach(function(obj, index){
          var i = 0
          var l = 0
          for(i;i<obj.length;) {
            if(obj[i]<=0){
              break;
            }else {
              i++
            }
          }
          if(i==obj.length) {
            self.matrix.splice(index,1)
            let newRow = new Array(12);
            for(let j = 0 ; j<newRow.length ;j++) {
              newRow[j] = -1
            }
            self.matrix.splice(0,0,newRow)
          }
        })
      },
      ///deep: true
    },
    'test':{
      handler:function(){
        alert(11)
      },
      deep: true
    }
  }
}