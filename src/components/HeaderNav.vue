<template>
    <div class="header-nav">
        <div class="header-nav-left">
            <i class="iconfont icon-home" @click="toHome"></i>
        </div>
        <div class="header-nav-logo"></div>
        <div class="header-nav-right">
            <i class=" iconfont icon-search" @click="toSearch"></i>
            <i class=" iconfont icon-icon-test"  @click="toShopCar"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        methods:{
             toHome(){
                 this.$router.push('/firstview')
             },
            toSearch(){
                this.$router.push('/search')
            },
            toShopCar(){
                this.$router.push('/shopCar')
            },
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .header-nav
        box-sizing border-box
        position: relative
        width 100%
        height 88px
        padding 0 18px 0 24px
        background-color: #fff
        display flex
        align-items center
        justify-content space-between
        .header-nav-left
            .icon-home
                display inline-block
                font-size 60px
                color #666666
        .header-nav-logo
            position: absolute
            left: 0
            top: 0
            right: 0
            bottom: 0
            margin auto
            width 172px
            height 54px
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
            background-repeat no-repeat
            background-size 90%
        .header-nav-right
            display flex
            align-items center
            .icon-search
                display inline-block
                width 64px
                height 64px
                font-size 60px
                color #666
            .icon-icon-test
                display inline-block
                width 64px
                height 64px
                font-size 60px
                color #666666

</style>