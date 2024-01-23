import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const DishSlice = createSlice({
  name: "Dishes",
  initialState: {
    Dishes: [],
    loading: false,
  },
   reducers:{ },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllDishes.fulfilled, (state, action) => {
        state.loading = false;
        state.Dishes = action.payload;
      })
      .addCase(fetchAllDishes.rejected, (state) => {
        state.loading = false;
      })
      // .addCase(fetchCategoryDishes.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchCategoryDishes.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.Dishes = action.payload;
      // })
      // .addCase(fetchCategoryDishes.rejected, (state) => {
      //   state.loading = false;
      // })
  },
});
const Server_URL = import.meta.env.VITE_SERVER_URL;
export const fetchAllDishes = createAsyncThunk("/fetchAll/dishes", async () => {
  try {
    const res = await axios.get(`${Server_URL}`+"dish/fetchAllDishes", {withCredentials:true});
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
});
export const fetchCategoryDishes = createAsyncThunk("/fetchAll/dishes", async ({category}) => {
  try {
    const res = await axios.get(`${Server_URL}dish/fetchCategoryDishes/${category}`, {withCredentials:true});
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
});

export default DishSlice.reducer;
