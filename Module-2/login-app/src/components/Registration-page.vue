<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label>Username:</label>
      <input v-model="username" type="text" id="username" required />
      <label>Password:</label>
      <input v-model="password" type="password" id="password" required />
      <button type="submit">Register</button>
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
    register() {
      console.log("Registering...");
    },
  },
};
</script>

<style scoped></style>
