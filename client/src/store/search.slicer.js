import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setSearch = createAsyncThunk("search/set", async (payload, { rejectedWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

const initialState = {
  search: ""
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setSearch.fulfilled, (state, { payload }) => {
      state.search = payload;
    });
  }
});

const { reducer: searchReducer } = searchSlice;

export const getSearch = () => state => state.search.search;

export default searchReducer;
