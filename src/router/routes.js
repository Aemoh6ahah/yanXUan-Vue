//一级路由组件
 const FirstView =()=>import('../pages/firstView/FirstView')
const Discovery   =()=>import('../pages/discovery/Discovery')
const CateList   =()=>import('../pages/cateList/CateList')
const Login   =()=>import('../pages/login/Login')
const ShopCar   = ()=>import('../pages/shopCar/ShopCar')
const Search = ()=>import('../pages/search/Search')
// 首页的二级路由组件
const Home   =()=>import('../pages/firstView/home/Home')
const Ghqj   =()=>import('../pages/firstView/home/Ghqj')
const Msjs   =()=>import('../pages/firstView/home/Msjs')
export default {
    mode: 'history',
    routes: [
        {
            path: '/firstview',
            component: FirstView,
            children:[
                {
                    path:'/firstview/home',
                    component:Home,
                    meta:{
                        isShowFoot:true
                    }
                },
                {
                    path:'/firstview/ghqj',
                    component:Ghqj,
                    meta:{
                        isShowFoot:true
                    }
                },
                {
                    path:'/firstview/msjs',
                    component:Msjs,
                    meta:{
                        isShowFoot:true
                    }
                },
                {
                    path:'/firstview',
                    redirect:'/firstview/home',
                    meta:{
                        isShowFoot:true
                    }
                }

            ]
        },
        {
            path: '/discovery',
            component: Discovery,
            meta:{
                isShowFoot:true
            }
        },
        {
            path: '/cateList',
            component: CateList,
            meta:{
                isShowFoot:true
            }
        },
        {
            path: '/login',
            component: Login,
            meta:{
                isShowFoot:false
            }
        },
        {
            path: '/shopCar',
            component: ShopCar,
            meta:{
                isShowFoot:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                isShowFoot:false
            }
        },
        {
            path:'/firstview',
            redirect:'/firstview/home'
        },
        {
            path:'/',
            redirect:'/firstview'
        }
    ]
}