export default {
    //设置初始化搜索界面下热词搜索的对象

    //设置state里的搜索建议数组
    "setSearchSugArr"(state,arr){
        state.searchSugArr = arr
    },
    //设置搜索界面的的initObj
    "setSearchPageInitObj"(state,searchPageInitObj){
        state.searchPageInitObj = searchPageInitObj
    },
    // 设置发现页导航数组 discoverNav
    "setDiscoverNav"(state,discoverNav){
        state.discoverNav = discoverNav
    },
    // 设置发现页主题内容 discoverContent
    "setDiscoverContent"(state,discoverContent){
        state.discoverContent = discoverContent
    },
    //设置发现页上划加载内容的数组discoverMore
    "setDiscoverMore"(state,discoverMore){
        state.discoverContent = state.discoverContent.concat(discoverMore)
        state.flag = state.flag+1
    }
}