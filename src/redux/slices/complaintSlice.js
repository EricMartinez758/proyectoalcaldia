// src/redux/slices/complaintsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/complaints';

// Obtener todas las denuncias
export const fetchComplaints = createAsyncThunk('complaints/fetchComplaints', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const complaintsSlice = createSlice({
  name: 'complaints',
  initialState: {
    complaints: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComplaints.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComplaints.fulfilled, (state, action) => {
        state.loading = false;
        state.complaints = action.payload;
      })
      .addCase(fetchComplaints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default complaintsSlice.reducer;
