import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"


export const ItemSlice = createSlice({
    name:"Item",
    initialState:{
        Item:{},
        error:"",
        loading:false,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(GetItem.pending,(state)=>{
            state.loading = true;
        })
        .addCase(GetItem.fulfilled,(state,action)=>{
            state.loading = false;
            state.Item = action.payload;
        })
        .addCase(GetItem.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload.msg
        })

    }
})

const Server_URL = import.meta.env.VITE_SERVER_URL;

export const GetItem = createAsyncThunk("/menu/item", async({_id})=>{
    try {
        const res = await axios.get(`${Server_URL}`+"dish/fetchDishById/"+`${_id}`, {withCredentials:true})
        const data =res.data;
        return data;
    } catch (error) {
        return error
    }
})

export default ItemSlice.reducer;