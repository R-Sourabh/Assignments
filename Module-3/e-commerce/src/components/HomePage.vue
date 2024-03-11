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
      <h1 class="title">Featured Products</h1>
      <div class="columns is-multiline">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="column is-one-third"
        >
          <div class="card" @click="navigate(product)">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="product.image" alt="Product Image" />
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-4">{{ product.name }}</p>
              <p class="subtitle is-6">
                Price: ${{ product.price.toFixed(2) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      products: [
        {
          name: "Product 1",
          image: "https://via.placeholder.com/300",
          price: 29.99,
        },
        {
          name: "Product 2",
          image: "https://via.placeholder.com/300",
          price: 39.99,
        },
        {
          name: "Product 3",
          image: "https://via.placeholder.com/300",
          price: 49.99,
        },
      ],
      cartCount: 0,
    };
  },
  methods: {
    navigate(product) {
      this.$router.push({
        name: "product-details",
        params: { id: this.products.indexOf(product) },
        props: { product },
      });
    },
  },
};
</script>
