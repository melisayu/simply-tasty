import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'

Vue.config.productionTip = false

Vue.use({
  install() {
    Vue.prototype.axios = axios.create({
      baseURL: 'https://www.themealdb.com/api/json/v1/1/',
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
