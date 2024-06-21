// src/reducers/productReducer.js

const initialState = {
    products: [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 30 },
    ],
  };
  
  const productReducer = (state = initialState, action) => {
    return state;
  };
  
  export default productReducer;
  