<template>
    <div class="container">
        <div class="header">
            <div class="header-top">
                <div class="header-top-left">
                    <i class="icon-home iconfont icon-homepage"></i>
                </div>
                <div class="header-top-logo">
                    <span class="discovery">
                        发现
                    </span>
                    <span class="zxj">
                        甄选家
                    </span>
                </div>
                <div class="header-top-right">
                    <i class=" iconfont icon-search"></i>
                    <i class=" iconfont icon-icon-test" ></i>
                </div>
            </div>
            <div class="header-nav">
                <div class="header-nav-wrap">
                    <ul class="header-nav-list">
                        <li class="list-item" v-for="(item,index) in $store.state.discoverNav" :key="index+item.tabName">{{item.tabName}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="srocll-wrap">
                <div class="scroll-content">
                    <div class="content-item typeA" v-for="(item,index) in discoverContent" :class="(item.style==1)?'typeA':'typeB'" >
                        <div class="item-name"><img :src="item.avatar" alt="">{{item.nickname}}</div>
                        <div class="item-title">
                            {{item.title}}
                        </div>
                        <div class="item-img">
                            <img :src="item.picUrl" alt="">
                        </div>
                        <div class="item-desc" v-show="item.style==2">111</div>
                        <div class="item-footer">
                            XXX人看过
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
        name: "Discovery",
        data(){
            return ({
                typeA:1,
                typeB:2,
                page:0,
                pageFlag:true,
                pageLength:0,
                scrollTimer:null,
                scrollTimer1:null
            })
        },
        mounted() {
            let navWrap = document.querySelector('.header-nav-wrap')
            this.bs = new Bscroll(navWrap,{scrollX:true,click:true})
            let scrollWrap = document.querySelector('.srocll-wrap')
            this.bs2 = new Bscroll(scrollWrap,{scrollY:true,click:true,probeType:2})
            this.bs2.on('scroll',(pos)=>{
                if (this.scrollTimer1) {
                    clearTimeout(this.scrollTimer1)
                    this.scrollTimer = setTimeout(()=>{
                        if (pos.y<=this.bs2.maxScrollY){
                            if (this.pageLength === this.discoverContent.length){
                                this.pageFlag = false
                            }
                        }
                    },1000)
                }else {
                    this.scrollTimer1 = setTimeout(()=>{
                        if (pos.y<=this.bs2.maxScrollY){
                            if (this.pageLength === this.discoverContent.length){
                                this.pageFlag = false
                            }
                        }
                    },1000)
                }














            })
            this.$store.dispatch('getDiscoverNav')
            this.$store.dispatch('getDiscoverContent')
            // setTimeout(()=>{
            //     this.$store.dispatch('getDiscoverMore')
            // },1000)

        },
        computed:{
            ...mapState(['discoverContent']),
            // pageLength(){
            //     return this.discoverContent.length
            // }
        },
        watch:{
            discoverContent(){
                // let navWrap = document.querySelector('.header-nav-wrap')
                // this.bs = new Bscroll(navWrap,{scrollX:true,click:true})
                if (this.scrollTimer) {
                    clearTimeout(this.scrollTimer)
                    this.scrollTimer = setTimeout(()=>{
                        this.pageLength = this.discoverContent.length
                        this.pageFlag = true
                        this.page += 1
                        console.log('discoverContent'+' '+this.pageLength)
                    },1000)
                }else {
                    this.scrollTimer = setTimeout(()=>{
                        this.pageLength = this.discoverContent.length
                        this.pageFlag = true
                        this.page += 1
                        console.log('discoverContent'+' '+this.pageLength)
                    },1000)
                }







                //
            },
            pageFlag(){
                if (!this.pageFlag){
                    this.$store.dispatch('getDiscoverMore',this.page,5)
                }
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .container

        height 100vh
        position: relative
        background-color: #f4f4f4
        .header
            z-index 10
            position: absolute
            left: 0
            top: 0
            .header-top
                box-sizing border-box
                position: relative
                width 100%
                height 88px
                padding 0 18px 0 24px
                background-color: #fff
                display flex
                align-items center
                justify-content space-between
                .header-top-left
                    .icon-home
                        display inline-block
                        font-size 60px
                        color #666666
                .header-top-logo
                    position: absolute
                    left: 0
                    top: 0
                    right: 0
                    bottom: 0
                    margin auto
                    height 54px
                    text-align center
                    line-height 54px
                    .discovery
                        font-size 40px
                        color #b4282d
                        font-weight 800
                    .zxj
                        font-size 28px
                        color #7f7f7f
                .header-top-right
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
    
    
    
            .header-nav
                width 100%
                height 68px
                .header-nav-wrap
                    width 100vw
                    height 68px
                    position: relative
                    .header-nav-list
                        display flex
                        height 68px
                        position: absolute
                        left: 0
                        top: 0
                        background-color: #fafafa
                        li
                            white-space nowrap
                            height 68px
                            line-height 68px
                            margin  0 20px
                            padding 0 8px
                            font-size 28px
                            color #666666
                            border-bottom 4px solid rgba(0,0,0,0)
                            &.active
                                color #b4282d
                                border-bottom 4px solid #b4282d
        .content
            padding-top  156px
            .srocll-wrap
                width 100%
                height 80vh
                background-color: pink
                .scroll-content
                    position: absolute
                    width 100%
                    z-index 0
                    .content-item
                        &.typeA
                            box-sizing border-box
                            width 100%
                            height 676px
                            margin 20px 0
                            padding 36px 30px
                            background-color: #fafafa
                            .item-name
                                height 56px
                                margin 0 0 24px
                                width 100%
                                display flex
                                align-items center
                                font-size 28px
                                img
                                    width 54px
                                    height 54px
                                    border-radius 50%
                                    margin-right 20px
                            .item-title
                                font-size 36px
                                color #333
                                margin-bottom 16px
                            .item-img
                                width 100%
                                height 376px
                                img
                                    width 100%
                                    height 100
                                    border-radius 10px
                            .item-footer
                                width 100%
                                height 34px
                                line-height 34px
                                margin-top 10px
                                color #999
                                font-size 22px

                        &.typeB
                            box-sizing border-box
                            height 336px
                            margin 20px 0
                            padding 36px 30px
                            position: relative
                            background-color: #fff
                            .item-name
                                display flex
                                align-items center
                                width 400px
                                height 56px
                                img
                                    border-radius 50px
                                    margin-right 20px

                            .item-title
                                padding-top 32px
                                box-sizing border-box
                                width 400px
                                height 120px
                                font-size 36px
                                color #333
                            .item-desc
                                width 400px
                                height 48px
                                font-size 28px
                                color #999
                                margin-top  8px
                            .item-img
                                position: absolute
                                right: 30px
                                bottom: 0
                                top: 0
                                margin auto 0
                                width 272px
                                height 272px
                                img
                                    width 100%
                                    height 100%
                                    border-radius 5%
                            .item-footer
                                margin-top 0
                                width width 400px
                                height 34px
                                line-height 34px
                                color #999
                                font-size 22px
         width 100%
</style>
