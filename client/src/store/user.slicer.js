import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";

export const setUser = createAsyncThunk("user/set", async (_, { rejectedWithValue }) => {
  try {
    if (localStorageService.getAccessToken()) {
      const userData = await userService.getCurrentUser();
      return userData.content[0] || null;
    }
    return null;
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

export const updateUser = createAsyncThunk("user/update", async (payload, { rejectWithValue }) => {
  try {
    const { content } = await userService.update(payload);
    if (content) return payload;
    else return null;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const setPending = state => {
  state.isLoading = true;
};

const initialState = {
  user: null,
  isLoading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(setUser.pending, setPending);
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

const { reducer: userReducer } = userSlice;

export const getUser = () => state => state.user.user;

export const getLoadingUser = () => state => state.user.isLoading;

export default userReducer;
