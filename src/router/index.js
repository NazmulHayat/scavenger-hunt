import Vue from 'vue'
import VueRouter from 'vue-router'
import Easter from '../views/Easter.vue'
import Break from '../views/Break2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Easter-Egg',
    component: Easter
  },
  {
    path: '/break-the-code',
    name: 'Break-the-Code',
    component: Break
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
