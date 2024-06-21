// src/reducers/cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART } from "../cartActions";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedItems = [...state.items, action.product];
      const updatedAmount = state.totalAmount + action.product.price;
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    case REMOVE_FROM_CART:
      const filteredItems = state.items.filter((item) => item.id !== action.productId);
      const removedItem = state.items.find((item) => item.id === action.productId);
      const newAmount = state.totalAmount - (removedItem ? removedItem.price : 0);
      return {
        ...state,
        items: filteredItems,
        totalAmount: newAmount,
      };
    default:
      return state;
  }
};

export default cartReducer;
