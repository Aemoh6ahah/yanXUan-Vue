import {initSearch,searchSug} from '../api'

export default {
    //发请求获取defaultKeyword对象
    async "getSearchPageInitObj"(context){
        let res = await initSearch()
        console.log(res)
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
    }
}