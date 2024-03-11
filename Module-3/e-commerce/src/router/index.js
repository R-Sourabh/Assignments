// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import Cart from '@/components/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: ProductDetails,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
