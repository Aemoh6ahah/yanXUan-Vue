import Vue from 'vue'
import App from './App.vue'
// 适配
import 'lib-flexible/flexible'

// vuex
import store from './sotre'
// vue-router
import router from './router'

// mintUI
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

// swiper插件
import './utils/swiper'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
