import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Prueba from '../views/Prueba.vue'
import Franquicias from '../views/Franquicias.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Franquicias',
    component: Franquicias
  },
  {
    path: '/',
    name: 'Prueba',
    component: Prueba
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
