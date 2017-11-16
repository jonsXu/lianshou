<template>
    <div class="confirm">
        <slot></slot>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/vali';
    .confirm {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(0,0,0,.7);
        height: 100%;
        z-index: 999;
        color:white;
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgConfirm'
    }
</script>