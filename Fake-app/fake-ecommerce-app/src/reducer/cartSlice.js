import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.id !== productId);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item && item.quantity < 5) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.find((item) => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
