import { createRouter, createWebHistory } from '@ionic/vue-router';
import homePage from '@/pages/homePage';
import AssignedReports from '@/pages/AssignedReports';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/performedReports',
    name: 'performedReports',
    component: () => import('@/pages/performedReports'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/pages/Settings')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/pages/Account')
  },
  {
    path: '/databaseDocs',
    name: 'databaseDocs',
    component: () => import('@/pages/DatabaseDocs')
  },
  {
    path: '/AssignedReports',
    name: 'AssignedReports',
    component: AssignedReports,
  },
  {
    path: '/editReport',
    name: 'EditReport',
    component: () => import('@/pages/EditReport')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login')
  },
  {
    path: '/authenticate',
    name: 'authenticate',
    component: () => import('@/pages/Authenticate'),
    meta: { requiresLogin: true }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const isLoggedIn = sessionStorage.getItem('Login') === 'true';
  if (to.meta.requiresLogin && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = sessionStorage.getItem('Authenticated') === 'true';
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/authenticate');
  } else {
    next();
  }
});

export default router