<template>
    <div class="container">
        <div class="catelist-header">
            <div class="search">
                <span class="icon"></span>
                <span>搜索商品, 共22773款好物</span>
            </div>
        </div>
        <div class="catelist-content">
            <div class="catelist-nav">
                <ul class="catelist-navlist">
                    <li v-for="(item,index) in testArr" :key="index" :class="index===testChoseKey?'active':''" @click="setChoseKey(index,item)">{{item}}</li>
                </ul>
            </div>
            <cateDetail :data="testDate" />
        </div>
    </div>
</template>

<script>
    //Bsrcoll滑动插件
    import Bscroll from 'better-scroll'
    //引入组件cateDetail组件
    import cateDetail from '../../components/cateDetail/CateDetail'
    export default {
        name: "cateList",
        components:{
            cateDetail
        },
        mounted() {
            this.changeBannerSize()
            window.addEventListener('resize',this.changeBannerSize)
            this.cateListScroll = new Bscroll('.catelist-nav',{click:true})
            //设置默认的 testData
            this.testArr = ["换季专区","爆品专区","新品专区","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色","全球特色","全球特色","全球特色","全球特色","全球特色","全球特色"]
            this.testDate = this.testArr[0]
        },
        data() {
            return {
                testDate:'',
                testChoseKey:0,
                testArr:[]
            }
        },
        methods:{
            changeBannerSize(){
                document.querySelector('.catelist-content').style.height = document.documentElement.clientHeight - document.querySelector('.catelist-header').clientHeight - document.querySelector('.nav-bar').clientHeight + 'px'
                // document.querySelector('.catelist-banner').style.width = document.documentElement.clientWidth - document.querySelector('.catelist-navlist').clientWidth + 'px'
            },
            setChoseKey(key,item){
                this.testChoseKey = key
                this.testDate = item
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .container
        position: relative
        .catelist-header
            width 100%
            height 88px
            box-sizing border-box
            padding 0 30px
            background-color #fff
            display flex
            align-items center
            position: absolute
            z-index 9
            .search
                width 100%
                height 56px
                background-color #ededed
                display flex
                align-items center
                justify-content center
                font-size 28px
                .icon
                    display inline-block
                    width 28px
                    height 28px
                    margin-right 10px
                    background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                    background-position center
                    background-repeat no-repeat

        .catelist-content
            height 100%
            display flex
            position: absolute
            left: 0
            top: 88px
            .catelist-nav
                width 162px
                height 100%
                padding 40px 0
                box-sizing border-box
                position: relative
                background-color: #fff
                .catelist-navlist
                    position absolute
                    left: 0
                    top: 0
                    li
                        box-sizing border-box
                        width 162px
                        height 50px
                        margin-top 40px
                        font-size 28px
                        line-height 50px
                        text-align center
                        &.active
                            border-left 6px solid #b4282d
                            color #b4282d
                    &:first-child
                        margin-top 0px


</style>