import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue';
import RegisterViewVue from '@/views/RegisterView.vue';
import AboutViewVue from '@/views/AboutView.vue';
import CommentTestViewVue from '@/views/CommentTestView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: () => {
      return { name: "home" }
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewVue
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterViewVue
  },

  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  },

  {
    path: '/commentTest',
    name: 'commentTest',
    component: CommentTestViewVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
