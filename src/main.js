import Vue from 'vue'
import Switch from 'buefy/dist/components/switch'

import axios from 'axios'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(Switch)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
