const TokenApi = {
    validateToken(token) {
      return Promise.resolve({ valid: true });
    }
  };
  
  export default TokenApi;
  