<template>
  <div class="example-component">
    <h1>{{ $t('welcome_message') }}</h1>
    <div class="language-buttons">
      <button @click="switchToEnglish">English</button>
      <button @click="switchToSpanish">Spanish</button>
    </div>
    <div v-if="users.length > 0" class="user-info">
      <h2>User Information:</h2>
      <div v-for="user in users" :key="user.id" class="user-info">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Username:</strong> {{ user.username }}</p>
        <p><strong>Phone:</strong> {{ user.phone }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    switchToEnglish() {
      this.$i18n.locale = 'en';
    },
    switchToSpanish() {
      this.$i18n.locale = 'es';
    },
    fetchUserData() {
      const token = window.localStorage.getItem('token');
      if (token) {
        fetch('https://jsonplaceholder.typicode.com/users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => response.json())
        .then(data => {
          this.users = data.slice(0, 5); 
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
      } else {
        console.error('Token not found in local storage.');
      }
    }
  }
};
</script>

<style scoped>
.example-component {
  text-align: center;
  margin-top: 20px;
}

.language-buttons {
  margin-top: 20px;
}

.language-buttons button {
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
}

.language-buttons button:hover {
  background-color: #e0e0e0;
}

.user-info {
  margin-top: 20px;
}
</style>
