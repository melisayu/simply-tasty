import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import About from '../views/About.vue'
import Categories from '../views/Categories.vue'
import CategoryList from '../views/CategoryList.vue'
import Detail from '../views/Detail.vue'
import Random from '../views/Random.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/category/:type',
    name: 'Category List',
    component: CategoryList,
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
