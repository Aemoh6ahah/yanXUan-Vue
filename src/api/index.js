import ajax from './ajax'
export const initSearch = ()=> ajax(`/api/xhr/search/init.json`)
export const searchSug = (data)=> ajax('/api/xhr/search/searchAutoComplete.json',data,"POST")
//获取发现页导航的数组
export const discoverNav = ()=>ajax('/api/topic/v1/find/getTabs.json')
//获取发现页主体的数组
export const discoverContent = ()=>ajax('/api/topic/v1/find/recManual.json')
//上划加载更多
export const discoverMore = (data)=>ajax('/api/topic/v1/find/recAuto.json',data)
