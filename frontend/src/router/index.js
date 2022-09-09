import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateRO from '../components/CreateROComponent'
import ViewRO from '../components/ViewROComponent'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/createro',
    name: 'CreateRO',
    component: CreateRO
  },
  {
    path:'/viewro',
    name: 'ViewRO',
    component: ViewRO
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/invoice',
    name: 'Invoice',

    component: () => import('../views/Invoice.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
