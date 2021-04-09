import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// custom sass
import './assets/sass/main.sass'

import { BContainer } from 'bootstrap-vue'
Vue.component('b-container', BContainer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
