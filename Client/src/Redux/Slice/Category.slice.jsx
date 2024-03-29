import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL
// creating Category Slice
export const categorySlice = createSlice({
  name: "Category",
  initialState: {
    Category: [],
    error: "",
    loading:false,
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchCategory.pending,(state)=>{
        state.loading = true
    })
    .addCase(fetchCategory.fulfilled,(state, action)=>{
        state.loading = false
        state.Category = action.payload
    })
    .addCase(fetchCategory.rejected,(state)=>{
        state.loading = false
    })
  },
});
// create Thunk Function

export const fetchCategory = createAsyncThunk("/fetchCategory", async () => {
  try {
    const res = await axios.get(
      `${serverUrl}category/fetchCategory`,
      { withCredentials: true }
    );
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
});

// export Reducer
export default categorySlice.reducer;
