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
    decrement: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.name === action.payload.name
      );
      if (index >= 0) {
        if (state.products[index].quantity > 1) {
          state.products[index].quantity -= 1;
        } else {
          return {
            products: state.products.filter(
              (product) => product.name !== state.products[index].name
            ),
          };
        }
      }
    },
    removeAll: (state, action) => ({
      products: state.products.filter(
        (product) => product.name !== action.payload
      ),
    }),
  },
});

export const { increment, decrement, removeAll } = basketSlice.actions;

export default basketSlice.reducer;
