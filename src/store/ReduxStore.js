import { configureStore } from '@reduxjs/toolkit';
import itemReducer from "./slices/ItemSlice"
import currentCategoryReducer from "./slices/CategorySlice"



export const ReduxStore = configureStore({
  reducer: {
    items: itemReducer,
    currentCategory: currentCategoryReducer
  },
})