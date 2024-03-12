import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeNav from '@/components/HomeNav.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        LeftSideBar: HomeNav
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/AboutView.vue'),
        LeftSideBar: () => import('@/components/HomeNav.vue')
      }
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import('../views/CertsView.vue')
    }
  ]
})

export default router
