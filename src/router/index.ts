import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Index.vue')
  },
  {
    path: '/jellycat',
    name: 'JellycatCategory',
    component: () => import('@/pages/JellycatCategory.vue')
  },
  {
    path: '/american-snacks',
    name: 'AmericanSnacksCategory',
    component: () => import('@/pages/AmericanSnacksCategory.vue')
  },
  {
    path: '/product/:productId',
    name: 'ProductDetail',
    component: () => import('@/pages/ProductDetail.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 