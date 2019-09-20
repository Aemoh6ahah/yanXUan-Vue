import {initSearch,searchSug,discoverNav,discoverContent,discoverMore} from '../api'

export default {
    //发请求获取defaultKeyword对象
    async "getSearchPageInitObj"(context){
        let res = await initSearch()
        if (res.code==="200"){
            context.commit("setSearchPageInitObj",res.data)
        }
    },
    //发请求获取搜索建议
    async "getSearchSug"(context,data){
        let res =  await searchSug(data)
        console.log(res)
        if (res.code==="200"){
            context.commit("setSearchSugArr",res.data)
        }
    },
    //发请求获取发现页的导航
    async "getDiscoverNav"(context){
        let res = await discoverNav()
        if (res.code==="200"){
            context.commit("setDiscoverNav",res.data)
        }
    },
    //发请求获取发现页的主体内容
    async "getDiscoverContent"(context){
        let res = await discoverContent()

        if (res.code==="200"){
            let arr = []
            res.data.forEach((item)=>{
                item.topics.forEach((iitem)=>{
                    arr.push(iitem)
                })
            })
            context.commit("setDiscoverContent",arr)
        }
    },
    //发请求获取发现页上划加载更多内容
    async "getDiscoverMore"(context,page=1,size=5,exceptIds='100212,9437,14387,100756,100110,14328,100072,14113,100050,100026,13218,2747,12759,9439,12885,14112,100056,12522,100124,100111,7696,11758,11422,12672'){
        console.log(page)
        let res = await discoverMore({page,size})
        console.log(res)
        if (res.code==="200"){
            let arr = []
            res.data.result.forEach((item)=>{
                item.topics.forEach((iitem)=>{
                    arr.push(iitem)
                })
            })
            context.commit("setDiscoverMore",arr)
        }
    }
}