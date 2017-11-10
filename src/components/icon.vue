<template>
  <i class="iconfont" :class="'icon-'+name" @click="tap" v-if="isNormal==='1'"></i>
  <svg class="icon" aria-hidden="true" v-else>
        <use :xlink:href="'#icon-'+name"></use>
  </svg>
</template>

<script>
export default {
  name: 'PgIcon',
  props:{
    name:String,
    isNormal:String,//区分是不是彩色 '0'彩色 '1'普通
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    tap() {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  
</style>
