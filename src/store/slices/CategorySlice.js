import { createSlice } from '@reduxjs/toolkit'


export const CategorySlice = createSlice({
  name: 'currentCategory',

  initialState: {
    category: "items"
  },

  reducers: {
    changeCategory: (state, action) => {
        state.category = action.payload;
    },
  },

  
})

// Action creators are generated for each case reducer function
export const { changeCategory } = CategorySlice.actions

export default CategorySlice.reducer