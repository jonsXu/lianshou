<template>
    <div class="pg-wrapper">
        <slot></slot>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/vali';
    .pg-wrapper {
        width: 100%;
        position: relative;
        margin: 0 auto;
        height: 100%;
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgWrapper'
    }
</script>