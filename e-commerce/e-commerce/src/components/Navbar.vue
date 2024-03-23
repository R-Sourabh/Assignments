<template>    
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <router-link to="/" class="navbar-brand">My Shop</router-link>
      <router-link to="/cart" class="nav-link">Cart <span class="badge badge-secondary">Products Cart</span></router-link>
      <router-link to="/about" class="nav-link">About <span class="badge badge-secondary">About</span></router-link>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    padding: 10px 20px; 
  }
  
  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-link {
    color: #ffffff; 
    font-size: 18px;
    margin-left: 20px; 
  }
  
  .badge {
    background-color: #6c757d; 
    color: #ffffff; 
    font-size: 14px;
    margin-left: 5px; 
    padding: 5px 10px; 
  }
  </style>
  