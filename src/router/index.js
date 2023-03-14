import { createRouter, createWebHistory } from '@ionic/vue-router';
import FirstPage from '../pages/FirstPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: FirstPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
