<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/">E-Commerce</router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/cart">Cart ({{ cartCount }})</router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <h1 class="title">{{ product.name }}</h1>
      <div class="columns">
        <div class="column is-half">
          <figure class="image is-4by3">
            <img :src="product.image" alt="Product Image" />
          </figure>
        </div>
        <div class="column is-half">
          <p class="subtitle is-6">Price: ${{ product.price.toFixed(2) }}</p>
          <button class="button is-primary" @click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: ["product"],
  data() {
    return {
      cartCount: 0,
    };
  },
  methods: {
    addToCart() {
      this.$router.push({ name: "cart", params: { product: this.product } });
    },
  },
};
</script>
