<template>
    <div class="container">
        <HeaderNav/>
        <div class="preLogin" v-show="loginTypeState===0">
            <div class="logowrap">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="btnwrap">
                <div class="btn1 btn" @click="changetoPh">
                    手机号快捷登录
                </div>
                <div class="btn2 btn" @click="changetoPsw">
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
        <div class="phoneLogin" v-show="!(loginTypeState===0)">
            <div class="phoneLogin-logo">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="phoneLogin-form" v-show="loginTypeState===1">
                <mt-field
                        class="form-eml"
                        placeholder="请输入手机号"
                        type="email"
                ></mt-field>
                <mt-field
                        class="form-eml"
                        placeholder="请输入短信验证码"
                        type="email"
                >
                    <div class="code">发送验证码</div>

                </mt-field>
                <div class="help">
                    <div>遇到问题</div>
                    <div class="change-psw" @click="changetoPsw">使用密码登录</div>
                </div>

                <mt-button type="primary">登录</mt-button>
            </div>
            <div class="phoneLogin-form" v-show="loginTypeState===2">
                <mt-field
                        class="form-eml"
                        placeholder="请输入手机号"
                        type="email"
                ></mt-field>
                <mt-field
                        class="form-eml"
                        placeholder="请输入密码"
                        type="password"
                >

                </mt-field>
                <div class="help">
                    <div>遇到问题</div>
                    <div class="change-psw" @click="changetoPh">使用手机号验证登录</div>
                </div>

                <mt-button type="primary">登录</mt-button>
            </div>
            <div class="changeType" @click="changetoPre">切换登录方式</div>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '../../components/HeaderNav'

    export default {
        name: "Login",
        components: {
            HeaderNav,
        },
        data(){
            return ({
                loginTypeState:0
            })
        },
        methods:{
            changetoPh(){
                this.loginTypeState = 1
            },
            changetoPsw(){
                this.loginTypeState = 2
            },
            changetoPre(){
                this.loginTypeState = 0
            },
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
            background-color: #fff;

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
            padding-top 56px

            .phoneLogin-logo
                width 100%
                height 64px
                text-align center

                img
                    height 64px

            .phoneLogin-form
                box-sizing border-box
                padding 0 40px
                transform translateY(1px)
                position: relative
                .code
                    /*position: absolute*/
                    /*right: 42px*/
                    /*top: 160px*/
                    /*z-index 10*/
                    width 165px
                    height 56px
                    font-size 28px
                    text-align center
                    line-height 56px
                    color #333
                    background-color: #fff
                    border 1px solid #888
            .phoneLogin-form /deep/ .mint-cell-wrapper
                font-size 28px
                border-top none
                border-bottom 1px solid #666

            .phoneLogin-form /deep/ .mint-cell-wrapper input
                margin-top  32px
                height 90px
                color #333
            .help
                width 100%
                display flex
                justify-content space-between
                font-size 28px
                color #7f7f7f
                padding 40px 0
                .change-psw
                    color #333
            .mint-button
                width 100%
                height 90px
                border none
                font-size 28px
                background-color: #dd1a21

            .changeType
                height 40px
                text-align center
                font-size 28px
                color #333
                margin-top 46px
</style>