<template>
    <div class="nav-bar">
        <router-link to="/firstview" class="item">
            <i class="iconfont icon-home"></i>
            <span>首页</span>

        </router-link>
        <router-link to="/cateList" class="item ">
            <i class="iconfont icon-createtask"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/discovery" class="item ">
            <i class="iconfont icon-picture"></i>
            <span>识图</span>
        </router-link>
        <router-link to="/shopCar" class="item ">
            <i class="iconfont icon-icon-test"></i>
            <span>购物车</span>
        </router-link>
        <router-link to="/login" class="item ">
            <i class="iconfont icon-mine"></i>
            <span>个人</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .nav-bar
        width 100%
        height 98px
        display flex
        align-items center
        justify-content space-around
        position fixed
        left: 0
        bottom: 0
        background-color: #fff
        z-index 8
        .item
            display flex
            flex-direction column
            font-size 24px
            text-align center
            i
                font-size 60px
        .router-link-active
            color #b4282d
</style>