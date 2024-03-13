const fetchProduct = async (id) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  };
  
  const productIds = [1, 2, 3, 4, 5];
  
  const fetchAllProducts = async () => {
    try {
      const productPromises = productIds.map((id) => fetchProduct(id));
      const products = await Promise.all(productPromises);
      console.log(products);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };
  
  fetchAllProducts();