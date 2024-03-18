export default function middleware(router) {
    router.beforeEach((to, from, next) => {
      const isAuthenticated = checkAuthentication();
      if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'login' });
      } else {
        next();
      }
    });
  }
  
  function checkAuthentication() {
    const token = window.localStorage.getItem('token');
    return token !== null && token !== undefined;
  }
  