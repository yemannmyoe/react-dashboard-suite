import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../stores/cart'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
