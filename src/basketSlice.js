import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
  },
  reducers: {
    increment: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.name === action.payload.name
      );
      if (index >= 0) {
        state.products[index].quantity += 1;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { increment } = basketSlice.actions;

export default basketSlice.reducer;
