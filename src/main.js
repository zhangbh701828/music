import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Mint from 'mint-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/reset.css'
import rem from './assets/js/rem.js'
Vue.prototype.axios = axios
Vue.use(Mint)
Vue.use(Vant)
Vue.use(rem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
