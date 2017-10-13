<template>
  <div>
      <!-- <div>111</div> -->
      <canvas id="tetris" class="draw"  ref="draw" width="240" height="420"></canvas>
  </div>
</template>
<script>
import index from './index'
    export default {
        ...index
    }
</script>
<style type="stylesheet/less" scoped lang="less">
@import '~assets/css/vali';
  .draw{
    width: 12rem;
    margin: 0 auto;
    height: 20rem;
    img{
      width: 1rem;
      height: 1rem;
    }
  }
</style>
