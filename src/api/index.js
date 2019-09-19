import ajax from './ajax'
export const initSearch = ()=> ajax(`/api/xhr/search/init.json`)
export const searchSug = (data)=> ajax('/api/xhr/search/searchAutoComplete.json',data,"POST")