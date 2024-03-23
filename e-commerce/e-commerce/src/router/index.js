import { createRouter, createWebHistory } from 'vue-router';
import Products from '@/components/Products.vue';
import Cart from '@/components/Cart.vue';
import SingleProduct from '@/components/SingleProduct.vue';

const routes = [
  { 
    path: '/', 
    component: Products 
  },
  { 
    path: '/cart', 
    component: Cart 
  },
  { 
    path: '/product/:id', 
    component: SingleProduct, 
    props: true 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
