<template>
    <div class="container" @click.self="lostFocus">
        <div class="header">
            <div class="search">
                <span class="icon"></span>
                <input type="text" @input="handleSearch"  @focus="getFocus">
            </div>
            <span class="cancel" @click="handleBack">取消</span>
        </div>
        <div class="hotSearch" v-show="isShowHotSearch">
            <div class="hotSearch-header">
                热门搜索
            </div>
            <div class="list">
                <div class="item" v-for="(item,index) in $store.state.searchPageInitObj.hotKeywordVOList" :key="index" :class="item.highlight?'highlight':''">{{item.keyword}}</div>

            </div>
        </div>
        <div class="search-sug">
            <ul class="sug-list" v-show="$store.state.searchSugArr.length&&!isShowHotSearch">
                <li v-for="(text,index) in $store.state.searchSugArr" :key="index">
                    <div class="inner">{{text}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {initSearch,searchSug} from '../../api'
    export default {
        name: "Search",
        methods:{
            handleBack(){
                this.$router.back()
            },
            initData(){
                this.$store.dispatch("getSearchPageInitObj")
            },

            handleSearch(e){
                if (this.searchTimer){
                    clearTimeout(this.searchTimer)
                    this.searchTimer = setTimeout(()=>{
                        this.$store.dispatch("getSearchSug",{"keywordPrefix": e.target.value})
                    },500)
                } else {
                    this.searchTimer = setTimeout(()=>{
                        console.log('send')
                        this.$store.dispatch("getSearchSug",{"keywordPrefix": e.target.value})
                    },500)
                }

            },
            getFocus(){
                this.isShowHotSearch = false
            },
            lostFocus(){
                this.isShowHotSearch = true
            },
        },
        mounted() {
            this.searchTimer = null
            this.initData()
        },
        data(){
            return ({
                isShowHotSearch:true
            })
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .container
        position: relative
        background-color: #eee
        height 100vh
        .header
            width 100%
            height 88px
            box-sizing border-box
            padding 0 30px
            background-color #fff
            display flex
            align-items center

            .cancel
                display inline-block
                width: 56px
                height: 41px
                margin-left 30px
                font-size 28px
                color #333
                white-space nowrap

            .search
                width 100%
                height 56px
                background-color: #f4f4f4
                display flex
                align-items center
                box-sizing border-box
                padding 0 20px

                .icon
                    display inline-block
                    width 28px
                    height 28px
                    margin-right 10px
                    background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                    background-position center
                    background-repeat no-repeat

                input
                    width 100%
                    height 40px
                    background-color: #f4f4f4
                    margin: 0
                    padding: 0
                    border none
                    font-size 28px
                    color #888
                    outline none


        .hotSearch
            width 100%
            height 408px
            padding 0 30px 30px
            box-sizing border-box
            background-color: #fff
            transform translateY(-1px)
            .hotSearch-header
                height 90px
                color: #999;
                font-size 28px
                line-height 90px

            .list
                display flex
                flex-wrap wrap
                .item
                    display inline-block
                    height 41px
                    border 1px solid #888
                    padding 0 15px
                    margin 0 32px 32px 0
                    &.highlight
                        color #b4282d
                        border 1px solid #b4282d
        .search-sug
            width 100%
            background-color: #fff
            .sug-list
                width 100%
                li
                    width 100%
                    height 102px
                    padding-left 30px
                    font-size 28px
                    line-height 104px
                    color #333
                    box-sizing border-box
                    .inner
                        width 100%
                        height 100%
                        border-bottom 2px solid #eee
</style>