import { createRouter, createWebHistory } from '@ionic/vue-router';
import homePage from '../pages/homePage.vue';
const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: homePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
