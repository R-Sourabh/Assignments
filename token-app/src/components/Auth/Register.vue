<template>
  <div class="register-container">
    <form class="register-form" @submit.prevent="register()">
      <label class="form-label" for="email">E-mail:</label>
      <input class="form-input" v-model="registerData.email" type="email" id="email" required>
  
      <label class="form-label" for="password">Password:</label>
      <input class="form-input" v-model="registerData.password" type="password" id="password" required>
                    
      <button class="form-button" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import AuthService from '/src/services/AuthService.js';

export default {
  data () {
    return {
      registerData: { email: '', password: '' },
    };
  },
  methods: {
    register () {
      let credentials = this.registerData;
      AuthService.register(credentials)
        .then(response => {
          this.$router.push({ name: 'login' });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
  margin-bottom: 8px;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
}

.form-button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #218838;
}
</style>
