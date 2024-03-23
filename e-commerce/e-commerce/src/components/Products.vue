<template>   
    <div class="container mt-5 py-2">
      <h1 class="my-2">Products</h1>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-sm-6 col-md-4 p-2">
          <div class="product-card">
            <SingleProduct :product="product"></SingleProduct>
          </div>
        </div>
      </div>
    </div>
  </template>   
  
  <script>
  import SingleProduct from "./SingleProduct.vue"
  export default{
    components: {
      SingleProduct
    },
    computed: {
      products(){
        return this.$store.state.products;
      }
    },
    created(){
      this.$store.dispatch("fetchProducts");
    }
  }
  </script>
  
  <style scoped>
  /* Style for product cards */
  .product-card {
    background-color: #ffffff; /* White background color */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
    padding: 20px; /* Padding around the card */
    transition: transform 0.3s ease; /* Smooth transition on hover */
  }
  
  .product-card:hover {
    transform: translateY(-5px); /* Lift card slightly on hover */
  }
  
  .product-name {
    font-size: 18px; /* Font size for product name */
    font-weight: bold; /* Bold font weight */
  }
  
  .product-price {
    font-size: 16px; /* Font size for product price */
    color: #666666; /* Dark gray text color */
  }
  
  .product-image {
    max-width: 100%; /* Ensure image doesn't exceed card width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 5px; /* Rounded corners for image */
  }
  </style>
  