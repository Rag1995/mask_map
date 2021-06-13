import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/sass/_main.sass'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('fa-icon', FontAwesomeIcon)

import BtnClose from "../src/components/btn-close.vue"
Vue.component('btn-close', BtnClose)

// Event Bus
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
