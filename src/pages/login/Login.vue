<template>
    <div class="container">
        <HeaderNav/>
        <div class="preLogin">
            <div class="logowrap">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="btnwrap">
                <div class="btn1 btn">
                    手机号快捷登录
                </div>
                <div class="btn2 btn">
                    邮箱账号登录
                </div>
            </div>
            <div class="thirdwrap">
            <span class="thirdIocn">
                <i class="wechat"></i>
                微信
            </span>
                <span class="thirdIocn">
                <i class="qq"></i>
                QQ
            </span>
                <span class="thirdIocn">
                <i class="weibo"></i>
                微博
            </span>
            </div>
        </div>
        <div class="phoneLogin">
            <div class="phoneLogin-logo">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="form">

            </div>
            <div class="changeType">切换登录方式</div>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav'

    export default {
        name: "Login",
        components: {
            HeaderNav
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .container
        height 100vh
        background-color: #f2f5f4
        position: relative
        .preLogin
            height 100%
            display none
            background-color:#fff;
            .logowrap
                width 100%
                height 90px
                padding 160px 0 232px
                text-align center
                img
                    display block
                    height 90px
                    margin 0 auto
            .btnwrap
                box-sizing border-box
                width 100%
                height 220px
                padding 0 40px
                .btn
                    width 100%
                    height 94px
                    background-color: #bfa
                    margin-bottom 32px
                    font-size 28px
                    text-align center
                    line-height 94px
                .btn1
                    background-color: #dd1a21
                    color white
                .btn2
                    box-sizing border-box
                    color #dd1a21
                    background-color: #f2f5f4
                    border 1px solid #dd1a21
            .thirdwrap
                width 100%
                height 40px
                position: absolute
                bottom: 40px
                left: 0
                font-size 28px
                text-align center
                .thirdIocn
                    display inline-block
                    padding 0 40px
                    color #666666
        .phoneLogin
            height 100%
            background-color: #fff
            padding-top  56px
            .phoneLogin-logo
                width 100%
                height 64px
                text-align center
                img
                    height 64px
            .changeType
                height 40px
                text-align center
                font-size 28px
                color #333
                margin-top 46px
</style>