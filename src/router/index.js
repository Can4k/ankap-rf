import { createRouter, createWebHistory } from 'vue-router'
import ManagersPage from '../pages/ManagersPage.vue'
import MainPage from "@/pages/MainPage";
const routes = [
  {
    path: '/top-manage',
    name: 'top-manage',
    component: ManagersPage
  },
  {
    path: '/',
    name: 'main-page',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
