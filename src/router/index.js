import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home'
import gedan from '@/views/gedan/gedan'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: home
}, {
  path: '/gedan',
  name: 'gedan',
  component: gedan
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
