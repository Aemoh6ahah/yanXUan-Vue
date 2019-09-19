import axios from './interceptors'
export default function ajax(url,data={},method="GET") {
    return new Promise((resolve, reject)=>{
        let promise
        if (method==="GET"){//发送get请求
            promise = axios.get(url,{params:data})
        } else if (method === "POST") {//发送post请求
            promise = axios.post(url,data)
        }
        promise.then(
            response=>{
            resolve(response)
        },
            error=>{
                console.log('请求异常'+error)
            }
        )
    })
   
    
}