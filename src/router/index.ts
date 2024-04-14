import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
      }
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: () => import('../views/CertsView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/mc-donalds-shall-not-pass',
      name: 'mcd',
      components: {
        default: () => import('../views/MCDBlogView.vue'),
        sidebar: () => import('../components/HomeNav.vue')
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ]
})

export default router
