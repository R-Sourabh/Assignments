import { createRouter, createWebHistory } from 'vue-router'
import Loginpage from '../components/Login-page.vue'
import Registrationpage from '../components/Registration-page.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Loginpage,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registrationpage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
