import { configureStore } from '@reduxjs/toolkit';
import reducerUsers from './userSlice';

export const store = configureStore({
  reducer: {
    users: reducerUsers,
  },
});
