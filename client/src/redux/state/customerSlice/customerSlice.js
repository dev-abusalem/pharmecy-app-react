import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCustomers = createAsyncThunk('customer/fetchCustomer', async () => {
  try {
    const response = await axios.get('/customer/customer');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const customerSlice  = createSlice({

    name: "customer",
    initialState:{
        isLoading: false,
        customers: [],
        error: null,
    },
    reducers : {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCustomers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchCustomers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allcusomer = action.payload;
    
          })
          .addCase(fetchCustomers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message; // Set the error message
          });
      },
})

export { fetchCustomers };
export default customerSlice.reducer;