import Vue from 'vue'
import App from './App.vue'
//适配
import 'lib-flexible/flexible'

//vuex
import store from './sotre'
import router from './router'
import './utils/swiper'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
