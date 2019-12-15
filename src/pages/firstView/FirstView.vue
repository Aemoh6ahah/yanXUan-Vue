<template>
    <div class="container">
        <div class="header">
            <div class="header-top" @click="hideMask">
                <div class="logo"></div>
                <div class="search" @click="handleSearch">
                    <span class="icon"></span>
                    <span>搜索商品, 共22773款好物</span>
                </div>
                <div class="login-btn">
                    登录
                </div>
            </div>
            <div class="header-nav">
                <div class="nav-list-wapper" ref="navWrapper">
                    <ul class="nav-list" @click.self="testClick">
                        <router-link to="/firstview/home" @click.self="testClick">
                            <li class="nav-item active"><span>推荐内容</span></li>
                        </router-link>
                        <router-link to="/firstview/msjs">
                            <li class="nav-item"><span>美食酒水</span></li>
                        </router-link>
                        <router-link to="/firstview/ghqj">
                            <li class="nav-item"><span>个护清洁</span></li>
                        </router-link>
                        <router-link to="/firstview/unknow">
                            <li class="nav-item"><span>居家生活</span></li>
                        </router-link>
                        <router-link to="/firstview/unknow">
                            <li class="nav-item"><span>服饰鞋包</span></li>
                        </router-link>
                        <router-link to="/firstview/unknow">
                            <li class="nav-item"><span>母婴亲子</span></li>
                        </router-link>
                        <router-link to="/firstview/unknow">
                            <li class="nav-item"><span>运动旅行</span></li>
                        </router-link>
                        <router-link to="/firstview/unknow">
                            <li class="nav-item"><span>数码家电</span></li>
                        </router-link>
                        <router-link to="/firstview/unknow">
                            <li class="nav-item"><span>全球特色</span></li>
                        </router-link>
                    </ul>
                </div>
                <div class="toggle" @click="showMask">
                    <span class="icon" :class="{'active':isShowMask}">
                        12
                    </span>
                </div>
            </div>
            <div class="mask" v-show="isShowMask" @click.self="hideMask">
                <div class="nav-wrap">
                    <div class="nav-wrap-title">
                        全部频道
                    </div>
                    <ul class="nav-wrap-content">
                        <router-link to="/firstview/home"><li class="nav-item"><span>推荐</span></li></router-link>
                        <router-link to="/firstview/msjs"><li class="nav-item"><span>美食酒水</span></li></router-link>
                        <router-link to="/firstview/ghqj"><li class="nav-item"><span>个护清洁</span></li></router-link>
                        <router-link to="/firstview/unkonw"><li class="nav-item"><span>居家生活</span></li></router-link>
                        <router-link to="/firstview/unkonw"><li class="nav-item"><span>服饰鞋包</span></li></router-link>
                        <router-link to="/firstview/unkonw"><li class="nav-item"><span>母婴亲子</span></li></router-link>
                        <router-link to="/firstview/unkonw"><li class="nav-item"><span>运动旅行</span></li></router-link>
                        <router-link to="/firstview/unkonw"><li class="nav-item"><span>数码家电</span></li></router-link>
                        <router-link to="/firstview/unkonw"><li class="nav-item"><span>全球特色</span></li></router-link>
                    </ul>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: "FirstView",
        mounted() {
            //根据屏幕设置scrollcontent的高度  和mask遮罩层的高度
            (function () {
                let clientHeight = document.documentElement.clientHeight
                let headerTopHeight = document.querySelector('.header-top').clientHeight
                let mask = document.querySelector('.mask')
                mask.style.height = clientHeight + 'px'
                mask.style.transform = `translateY(${headerTopHeight}px)`
            })()
            this.scrollNav = new Bscroll(this.$refs.navWrapper, {scrollX: true,click:true})

        },
        data() {
            return {
                isShowMask: false
            }
        },
        methods: {
            showMask() {
                this.isShowMask = !this.isShowMask
            },
            hideMask() {
                this.isShowMask = false
            },
            testClick() {
                console.log('testclick')
            },
            handleSearch(){
                this.$router.push({ path: '/search' })
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .container
        position: relative

        .header
            width 100%
            height 148px
            background-color: #fff;
            position: relative
            z-index 7

            .header-top
                width 100%
                height 88px
                padding 16px 30px
                box-sizing border-box
                display flex
                align-items center

                .logo
                    width 138px
                    height 40px
                    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
                    background-position center
                    background-repeat no-repeat
                    background-size 100% 100%
                    margin-right 20px


                .search
                    width 442px
                    height 56px
                    background-color #ededed
                    text-align center
                    line-height 56px

                    .icon
                        display inline-block
                        width 28px
                        height 28px
                        margin-right 10px
                        background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                        background-position center
                        background-repeat no-repeat


                    span
                        font-size 28px

                .login-btn
                    width 74px
                    height 40px
                    color #b4282d
                    margin-left 16px
                    border 1px solid #b4282d
                    text-align center
                    line-height 40px
                    border-radius 8px

            .header-nav
                height 60px
                padding-left 30px
                display flex
                position relative

                .nav-list-wapper
                    width 100%
                    position: relative
                    overflow hidden
                    height 60px

                    .nav-list
                        position: absolute
                        display flex
                        height 60px
                        margin 0
                        a
                            &.router-link-active
                                border-bottom #b4282d solid 4px
                                li
                                    span
                                        color #b4282d

                        .nav-item
                            white-space nowrap
                            height 60px
                            line-height 60px
                            box-sizing border-box
                            color #333
                            margin-left 20px

                            &:first-child
                                margin 0

                            span
                                font-size 28px
                                padding 0 16px



                .toggle
                    width 120px
                    height 60px
                    background-color: #fff
                    right: 0
                    top: 0
                    position absolute
                    z-index 10
                    text-align center
                    line-height 60px

                    .icon
                        display inline-block
                        width 30px
                        height 30px
                        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
                        background-repeat no-repeat
                        background-position center
                        transition transform 0.5s

                        &.active
                            transform rotate(180deg)

        .mask
            /*display: none*/
            width 100%
            background-color rgba(0, 0, 0, .3)
            position: absolute
            top 0
            left 0
            z-index 6

            .nav-wrap
                /*display none*/
                position: absolute
                left: 0
                top: -1px
                width 100%
                height 372px
                background-color white
                z-index 8

                .nav-wrap-title
                    width 100%
                    height 60px
                    padding-left 30px
                    font-size: 28px
                    line-height 60px
                    color #333

                .nav-wrap-content
                    padding-top 30px
                    width 100%
                    display flex
                    flex-wrap wrap
                    a
                        &.router-link-active
                            li
                                border-color  #b4282d
                            span
                                color #b4282d

                    li
                        width 150px
                        height 56px
                        margin 0 0 40px 30px
                        text-align center
                        line-height 56px
                        border 1px solid #ccc
                        background-color: #fafafa

                        span
                            white-space nowrap
                            color #333


</style>