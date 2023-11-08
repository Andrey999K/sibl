import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setUser = createAsyncThunk("user/set", async (payload, { rejectedWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk("userItem/delete", async (payload, { rejectedWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk("userSettings/update", async (payload, { rejectWithValue }) => {
  try {
    return payload;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  user: null
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(deleteUser.fulfilled, (state, _) => {
      state.isLoading = false;
      state.user = null;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = { ...state.user, ...payload };
    });
  }
});

const { reducer: userReducer } = UserSlice;

export const getUser = () => state => state.user.user;

export default userReducer;
