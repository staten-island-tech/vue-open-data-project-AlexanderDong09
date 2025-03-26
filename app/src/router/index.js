import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/homeviewbutwithachartnow',
      name: 'homeviewbutwithachartnow',
      component: () => import('../views/DonutView.vue'),
    },
    {
      path: '/leadlevelsfilter',
      name: 'leadlevelsfilter',
      component: () => import('@/views/LeadFilterView.vue'),
    },
    {
      path: '/obligatoryspacebackgroundimagethatsbeeninthepastlike6projects',
      name: 'obligatoryspacebackgroundimagethatsbeeninthepastlike6projects',
      component: () => import('@/views/AViewOfSorts.vue'),
    },
  ],
})

export default router
