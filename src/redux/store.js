// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import dataReducer from './slices/dataSlice';
import complaintsReducer from './slices/complaintSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
    complaints: complaintsReducer,
  },
});

export default store;
