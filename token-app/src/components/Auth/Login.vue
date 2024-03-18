<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="authenticate()">
      <label class="form-label" for="email">E-mail:</label>
      <input class="form-input" v-model="auth.email" type="email" id="email" required>
  
      <label class="form-label" for="password">Password:</label>
      <input class="form-input" v-model="auth.password" type="password" id="password" required>
                    
      <button class="form-button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import AuthService from '/src/services/AuthService.js';

export default {
  data () {
    return {
      auth: { email: '', password: '' },
    };
  },
  methods: {
    authenticate () {
      let credentials = this.auth;
      AuthService.login(credentials)
        .then(user => {
          this.$router.push({ name: 'example-component' });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
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
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #0056b3;
}
</style>
