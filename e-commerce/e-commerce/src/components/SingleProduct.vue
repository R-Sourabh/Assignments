<template>
    <div class="card product-card"> 
      <div class="card-body"> 
        <h5 class="card-title product-name">{{product.name}}</h5> 
        <p class="card-text product-price">Price: <b>${{product.price}}</b></p> 
        <button 
          class="btn mt-3"
          :class="inCartQuantity ? 'btn-success' :  'btn-danger'"
          @click="addToCart(product.id)"
          :disabled="!inCartQuantity">
          {{inCartQuantity ? "Add to Cart" : "Out of stock"}}
        </button> 
      </div> 
    </div>
  </template>
  
  <script>
  export default {
    props: ["product"],
    computed: {
      inCartQuantity() {
        return this.product.quantity;
      }
    },
    methods: {
      addToCart(id){
        this.$store.dispatch("addToCart", id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Style for product card */
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
  </style>
  