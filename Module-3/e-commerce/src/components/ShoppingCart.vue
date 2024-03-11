<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/">E-Commerce</router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/cart">Cart ({{ cartItems.length }})</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1 class="title">Shopping Cart</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - ${{ item.price.toFixed(2) }} (Quantity:
          {{ item.quantity }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cartItems: [],
    };
  },
  mounted() {
    if (this.product) {
      this.cartItems.push({ ...this.product, quantity: 1 });
    }
  },
};
</script>
