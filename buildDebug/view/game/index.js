'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _vuex = require('vuex');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =
{
  name: 'game',
  data: function data() {
    return {
      isIngImg: '../../../static/cell.png',
      noIngImg: '../../../static/null.png',
      width: 0, //画布的宽
      cellWidth: 0, //单元块的边长
      matrix: [new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12), new Array(12)],
      ctx: null, //画布对象
      nowBlock: null, //当前正在下落的方块
      newFlag: true, //是否新生成一个方块，ps：好像没怎么用到，感觉没什么作用

      defr: 0, //下落延迟  ,
      allWindow: {
        timer: null,
        imgs: [], //加载好的图片
        speed: 25 //速度级数
      }, //全局对象
      score: 0, //得分,
      againRest: false, //重新开始
      stop: true, //播放 暂停控制
      speedflag: false //是否加速
    };
  },
  computed: (0, _extends3.default)({},
  (0, _vuex.mapGetters)([
  'ctxGetter'])),


  methods: (0, _extends3.default)({},
  (0, _vuex.mapActions)([
  'setCtx' // 映射 this.increment() 为 this.$store.dispatch('increment')
  ]), {
    //创建一个block对象
    createBlock: function createBlock() {
      var str = parseInt(Math.random() * 5) + 1; //生成随机的方块模型
      var self = this;
      var block = new Object();
      //默认第一个方块的坐标就是x=0 y=6
      block.type = str;
      var XandY = null;
      switch (str) {
        //z型
        case 1:
          XandY = [
          { x: 0, y: 5 },
          { x: 1, y: 5 },
          { x: 1, y: 6 },
          { x: 2, y: 6 }];

          break;
        //l型
        case 2:
          XandY = [
          { x: 0, y: 5 },
          { x: 1, y: 5 },
          { x: 2, y: 5 },
          { x: 3, y: 5 }];

          break;
        //T 型
        case 3:
          XandY = [
          { x: 0, y: 5 },
          { x: 1, y: 4 },
          { x: 1, y: 5 },
          { x: 1, y: 6 }];

          break;
        //L型
        case 4:
          XandY = [
          { x: 0, y: 5 },
          { x: 0, y: 6 },
          { x: 1, y: 6 },
          { x: 2, y: 6 }];

          break;
        //田型
        case 5:
          XandY = [
          { x: 0, y: 5 },
          { x: 0, y: 6 },
          { x: 1, y: 5 },
          { x: 1, y: 6 }];

          break;}

      block.XandY = XandY; //初始坐标位置
      self.nowBlock = block;
      self.setBlockToMatRix(0);
    },
    //将方块在画布的值设置好
    setBlockToMatRix: function setBlockToMatRix(number) {
      var self = this;
      self.nowBlock.XandY.forEach(function (obj, index) {
        self.setMatRix(obj.x, obj.y, number);
      });
    },
    //更新值
    setMatRix: function setMatRix(i, j, number) {
      var self = this;
      //self.matrix[i][j] = number;
      if (i >= 0) {
        self.$set(self.matrix[i], j, number);
      }
    },
    //初始化画布
    init: function init() {
      this.againRest = false;
      var draw = this.$refs.draw; //画布
      this.ctx = draw.getContext('2d');
      this.setCtx(this.ctx);
      this.width = parseInt(draw.getAttribute('width')); // 画布的宽
      this.cellWidth = this.width / 12; // 单元块的边长
      var self = this;
      this.loadImgs([this.isIngImg, this.noIngImg], function () {
        for (var i = 0; i < 20; i++) {// 初始化矩阵数组
          for (var j = 0; j < 12; j++) {
            self.setMatRix(i, j, -1);
            //ctx.fillRect(j * this.cellWidth,i * this.cellWidth,150,75);
            self.ctx.drawImage(self.allWindow.imgs[1], j * self.cellWidth, i * self.cellWidth, 20, 20);
            // ctx.drawImage(this.noIngImg, j * this.cellWidth, i * this.cellWidth, this.noIngImg.width, this.noIngImg.height);
          }
        }
        self.createBlock();
        self.run();
      });
      self.moveBlock();
    },
    /**
        * 刷新画布，遍历每个格子。根据格子的值来画不同的图
        */
    reflahCavs: function reflahCavs() {
      var self = this;
      self.matrix.forEach(function (col, i) {
        if (i == 20) {
          return false;
        }
        for (var j = 0; j < col.length; j++) {
          var oimg = self.matrix[i][j] < 0 ? self.allWindow.imgs[1] : self.allWindow.imgs[0];
          self.ctx.drawImage(oimg, j * self.cellWidth, i * self.cellWidth, 20, 20);
        }
      });
    },
    //开始游戏
    run: function run() {
      console.info("进入到run");

      var self = this;
      // self.createBlock()
      self.reflahCavs();
      self.allWindow.timer = setInterval(function () {
        self.dropStop();
        self.reflahCavs();
      }, 40);
      //this.ctx.drawImage(oimg, 6* self.cellWidth, 0 * self.cellWidth, '20', '20');
    },
    /**
        * 预加载图片
        * 
        * imgs - 加载的图片
        * sw - 屏幕的缩放比例
        * fun - 图片加载完成以后的回调函数
        */
    loadImgs: function loadImgs(imgs, fun) {
      var self = this;
      var l = imgs.length;
      var h = 0;

      imgs.forEach(function (img, index) {
        var imgObject = new Image();
        imgObject.src = img;
        imgObject.onload = function () {
          console.info(imgObject);
          self.allWindow.imgs.push(imgObject);
          h++;
          h >= l && fun();
        };

      });
    },
    //判断方块是否停止下落
    judgeStop: function judgeStop(block) {
      var flag = false;
      var self = this;
      var l = block.XandY.length;
      for (var i = 0; i < l; i++) {
        var obj = block.XandY[i];
        if (obj.x >= 19 || self.matrix[obj.x + 1][obj.y] > 0) {
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      return flag;
    },
    //方块下落停止
    dropStop: function dropStop() {
      var self = this;
      if (self.defr == self.allWindow.speed) {
        //如果到底部 或者碰到一个方块了 就重新生成方块开始移动
        if (self.judgeStop(self.nowBlock)) {
          self.setBlockToMatRix(1);
          //self.setMatRix(self.nowBlock.XandY[0].x,self.nowBlock.XandY[0].y,1)
          //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=1
          self.createBlock();
          self.newFlag = true;
        } else {
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
          self.setBlockToMatRix(-1);
          self.nowBlock.XandY.forEach(function (obj) {
            obj.x++;
          });
          self.setBlockToMatRix(0);
          //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=0
          self.newFlag = false;
        }
        self.defr = 0;
      } else {
        self.defr++;
      }


    },
    /**
        * 判断左右移动边界值
        * @param {*} str 方向 1左  2右
        */
    judgeRightOrLeft: function judgeRightOrLeft(block, str) {
      var self = this;
      var flag = false;
      var l = block.XandY.length;

      if (str == 1) {
        for (var i = 0; i < l; i++) {
          var obj = block.XandY[i];
          if (obj.y <= 0 || self.matrix[obj.x][obj.y - 1] > 0) {
            //如果往左移动的时候 碰到一个实体方块，或者当前已经在最左边了，就停止移动
            flag = true;
            break;
          } else {
            flag = false;
          }
        }
      } else {
        for (var _i = 0; _i < l; _i++) {
          var _obj = block.XandY[_i];
          if (_obj.y >= 11 || self.matrix[_obj.x][_obj.y + 1] > 0) {
            //如果往右移动的时候 碰到一个实体方块，或者当前已经在最右边了，就停止移动
            flag = true;
            break;
          } else {
            flag = false;
          }
        }
      }
      return flag;
    },
    //左移动
    moveLeft: function moveLeft() {
      var self = this;
      if (self.judgeRightOrLeft(self.nowBlock, 1)) {
        return false;
      } else {
        self.setBlockToMatRix(-1);
        self.nowBlock.XandY.forEach(function (obj) {
          obj.y--;
        });
        self.setBlockToMatRix(0);
      }
    },
    //右移动
    moveRight: function moveRight() {
      var self = this;
      if (self.judgeRightOrLeft(self.nowBlock, 2)) {
        //如果往右移动的时候 碰到一个实体方块，或者当前已经在最右边了，就停止移动
        return false;
      } else {
        self.setBlockToMatRix(-1);
        //self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,-1)
        //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=-1
        self.nowBlock.XandY.forEach(function (obj) {
          obj.y++;
        });
        //self.noWblock.XandY[0].y++
        self.setBlockToMatRix(0);
        //self.setMatRix(self.noWblock.XandY[0].x,self.noWblock.XandY[0].y,0)
        //self.matrix[self.noWblock.XandY[0].x][self.noWblock.XandY[0].y]=0
      }
    },
    //恢复速度
    changeSpeed: function changeSpeed() {
      this.speedflag = !this.speedflag; //true 加快  false恢复
      if (this.speedflag) {
        this.allWindow.speed = 1;
        this.defr = 1;
      } else {
        this.allWindow.speed = 25;
        this.defr = 0;
      }

    },

    /**
        * 按键控制移动 37左 ，39右 38上  40 下 给电脑用
        * @param {*} key 
        */
    moveBlock: function moveBlock(key) {
      var self = this;
      document.onkeydown = function (event) {
        if (event.keyCode == 37) {
          //左移动
          self.moveLeft();
        } else if (event.keyCode == 39) {
          self.moveRight();
        } else if (event.keyCode == 40) {
          //如果当按下的键为↓的时候，就把速度等级设置为1级。把延迟设置为1这样 1 = 1，就不会延迟了  那么就直接40ms就刷新一次 下降的时间就是40ms下一格
          self.changeSpeed();
        } else if (event.keyCode == 38) {
          self.rotate();

        }
      };
      document.onkeyup = function (event) {
        //监听按键的放开事件，
        if (event.keyCode == 40) {
          //当放开的为↓的时候，就把值恢复到原来的样子
          self.changeSpeed();
        }
      };
    },

    /**
        * 旋转变化，我自己以第三个坐标为旋转中心 （顺时针），
         * y1:旋转中心的y坐标,x1:旋转中心的x坐标
         * y:要旋转的方块的y坐标，x:要旋转的方块的x坐标
         * y(目)：旋转后的方块的y坐标，x(目):旋转过后的方块的x坐标
         * 
         * 公式是：y(目):y1+x1-x
         *        x(目):x1+y-y1
        * @param {*} c旋转中心方块 
        * @param {*} m需要旋转的方块
        */
    rotateChange: function rotateChange(c, m) {
      return { x: c.x + m.y - c.y, y: c.y + c.x - m.x };
    },
    //旋转，选取第三个方块为旋转中心顺时针旋转
    rotate: function rotate() {

      var self = this;
      if (self.nowBlock.type == 5) return false; //田字不变型
      //旋转前要判断是否可以旋转，就是判断边界值
      var block = new Object();
      block.type = self.nowBlock.type;
      block.XandY = self.nowBlock.XandY.slice(0, self.nowBlock.XandY.length);
      var flag = true;
      for (var i = 0; i < block.XandY.length; i++) {
        if (i != 2) {
          block.XandY[i] = self.rotateChange(block.XandY[2], block.XandY[i]);
          var x = block.XandY[i].x,y = block.XandY[i].y;
          //旋转后的坐标 不能超过边界值,并且方块上不能存在实体方块
          if (y < 0 || y > 11 || x > 19 || x < 0 || self.matrix[x][y] > 0) {
            flag = false;
            break;
          } else {
            flag = true;
          }
        }
      }

      if (flag) {
        self.setBlockToMatRix(-1);
        console.info(self.nowBlock.XandY);
        self.nowBlock.XandY = block.XandY.slice(0, block.XandY.length);
        //self.nowBlock.XandY = 
        // let XandY = self.nowBlock.XandY
        // self.nowBlock.XandY.forEach(function(obj,index,arrys){
        //   if(index !=2){
        //     arrys[index] = self.rotateChange(self.nowBlock.XandY[2],obj)
        //   }
        // })
        console.info(self.nowBlock.XandY);
        self.setBlockToMatRix(0);
      }

    },
    /**
        * 得分调用
        */
    getScore: function getScore() {
      var self = this;
      var l = 0;
      self.matrix.forEach(function (obj, index) {
        var i = 0;
        for (i; i < obj.length;) {
          if (obj[i] <= 0) {
            break;
          } else {
            i++;
          }
        }
        if (i == obj.length) {
          l++;
          self.matrix.splice(index, 1);
          var newRow = new Array(12);
          for (var j = 0; j < newRow.length; j++) {
            newRow[j] = -1;
          }
          self.matrix.splice(0, 0, newRow);
        }
      });
      switch (l) {
        case 1:
          self.score += 100;
          break;
        case 2:
          self.score += 300;
          break;
        case 3:
          self.score += 500;
          break;
        case 4:
          self.score += 700;
          break;}

    },
    //游戏结束
    gameOver: function gameOver() {
      var obj = this.matrix[0];
      var flag = false;
      for (var i = 0; i < obj.length; i++) {
        if (obj[i] == 1) {
          flag = true;
          break;
        } else {
          flag = false;
        }
      }
      if (flag) {
        clearInterval(this.allWindow.timer);
        this.againRest = true;
      }
    },
    //暂停
    stopOrContinue: function stopOrContinue() {
      this.stop = !this.stop;
      if (this.stop) {
        this.run();
      } else {
        clearInterval(this.allWindow.timer);
      }
    } }),

  mounted: function mounted() {
    //this.sets("wangwang")
    this.init();

    //alert("mounted")
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.allWindow.timer);
  },
  watch: {
    matrix: {
      handler: function handler() {
        //满一行减掉
        console.info(111);
        var self = this;
        self.getScore();
        self.gameOver();
        ///deep: true
      } } } };
//# sourceMappingURL=index.js.map