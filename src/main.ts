import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'

Vue.config.productionTip = false

// Remove later after everything is migrated to store
Vue.use({
  install() {
    Vue.prototype.axios = axios.create({
      baseURL: 'https://www.themealdb.com/api/json/v1/1/',
    })
  }
})
// -- Remove later after everything is migrated to store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
