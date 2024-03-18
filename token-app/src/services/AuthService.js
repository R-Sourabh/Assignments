const AuthService = {
    login(credentials) {
      const registrationData = JSON.parse(window.localStorage.getItem('registration'));
      if (registrationData && credentials.email === registrationData.email && credentials.password === registrationData.password) {
        const user = { id: 1, name: 'User', email: registrationData.email, role: 'user' };
        const token = 'hotwax_request_token';
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('auth-user', JSON.stringify(user));
        return Promise.resolve(user);
      } else {
        return Promise.reject(new Error('Invalid credentials'));
      }
    },
    register(credentials) {
      window.localStorage.setItem('registration', JSON.stringify(credentials));
      return Promise.resolve('Registration successful');
    }
  };
  
  export default AuthService;
  