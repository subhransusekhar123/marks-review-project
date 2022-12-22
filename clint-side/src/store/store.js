import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slice/countSlice';


export const store = configureStore({
  reducer: {
    counterReducer:counterReducer
  },
})