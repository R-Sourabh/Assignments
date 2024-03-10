<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Username:</label>
      <input v-model="username" type="text" id="username" required />
      <label>Password:</label>
      <input v-model="password" type="password" id="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.username, "and", this.password);
    },
  },
};
</script>

<style scoped></style>
