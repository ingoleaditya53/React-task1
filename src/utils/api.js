// src/utils/api.js

export const fetchProducts = async (page) => {
    const response = await fetch(`https://fakestoreapi.com/products?page=${page}&limit=10`);
    const data = await response.json();
    return data;
  };
  
  export const fetchUsers = async (page) => {
    const response = await fetch(`https://fakestoreapi.com/users?page=${page}&limit=10`);
    const data = await response.json();
    return data;
  };
  