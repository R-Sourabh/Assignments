import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue';
import ExampleComponent from '../components/ExampleComponent.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'register',
    component: Register
  },
  {
    path: '/example-component',
    name: 'example-component',
    component: ExampleComponent,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
