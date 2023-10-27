import {configureStore} from "@reduxjs/toolkit";

import CategorySlice from "./Slice/Category.slice";
import DishSlice from "./Slice/Dishes.slice";


export const store = configureStore({
    reducer:{
        Category:CategorySlice,
        Dishes:DishSlice
    }
})
