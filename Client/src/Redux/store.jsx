import {configureStore} from "@reduxjs/toolkit";

import CategorySlice from "./Slice/Category.slice";
import DishSlice from "./Slice/Dishes.slice";
import ItemSlice from "./Slice/Item.slice";

export const store = configureStore({
    reducer:{
        Category:CategorySlice,
        Dishes:DishSlice,
        Item:ItemSlice,
    }
})
