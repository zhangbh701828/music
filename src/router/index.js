import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home'
import gedan from '@/views/gedan/gedan'
import paihangbang from '@/views/paihangbang/paihangbang'
import bdxq from '@/views/paihangbang/components/bdxq'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: home
}, {
  path: '/gedan',
  name: 'gedan',
  component: gedan
}, {
  path: '/paihangbang',
  name: 'paihangbang',
  component: paihangbang
}, {
  path: '/bdxq/:name',
  name: 'bdxq',
  component: bdxq
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
