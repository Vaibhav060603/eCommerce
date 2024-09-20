import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const fetchItems = createAsyncThunk("fetchItems", async (category) => {         //1.
  const response = await fetch(`http://localhost:8080/${category}`);
  const data = await response.json();
  return data.items[0];
})


export const itemSlice = createSlice({
  name: 'items',

  initialState: {
    isLoading: false,                                                          //2.
    isError: false,
    data: []
  },

  reducers: {
    clearItems: (state) => {
      state.data = [];
    }
  },

  extraReducers: (builder) => {                                                //3.
    builder.addCase(fetchItems.pending, (state,action) => {
      state.isLoading = true;
      state.isError = false;
    }),

    builder.addCase(fetchItems.fulfilled, (state,action) => {
      state.isLoading = false;
      state.data = action.payload;

    }),

    builder.addCase(fetchItems.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    })
  }
})

// Action creators are generated for each case reducer function
export const {clearItems } = itemSlice.actions

export default itemSlice.reducer