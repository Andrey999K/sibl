import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../utils/getPosts";
import postService from "../services/post.service";

export const setPostList = createAsyncThunk("postList/set", async (payload, { rejectedWithValue }) => {
  try {
    return await getPosts(payload);
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const createPost = createAsyncThunk("postList/create", async (payload, { rejectedWithValue }) => {
  try {
    const { content } = await postService.create(payload);
    return content;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const updatePost = createAsyncThunk("postList/updatePost", async (payload, { rejectedWithValue }) => {
  try {
    const { post, postId } = payload;
    const { content } = await postService.edit({ ...post, postId });
    return content;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const deletePost = createAsyncThunk("postList/deletePost", async (payload, { rejectedWithValue }) => {
  try {
    await postService.delete(payload);
    return payload;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

const setPending = state => {
  state.isLoading = true;
};

const initialState = {
  postList: [],
  selectedPost: null,
  isLoading: false
};

const postListSlice = createSlice({
  name: "postList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setPostList.pending, setPending);
    builder.addCase(setPostList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.postList = payload;
    });
    builder.addCase(createPost.pending, setPending);
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.postList = [...state.postList, payload];
    });
    builder.addCase(updatePost.pending, setPending);
    builder.addCase(updatePost.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const index = state.postList.findIndex(f => f._id.toString() === payload._id.toString());
      state.postList[index] = { ...state.postList[index], ...payload };
    });
    builder.addCase(deletePost.pending, setPending);
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.postList = state.postList.filter(post => post._id !== payload);
    });
  }
});

const { reducer: postListReducer } = postListSlice;

export const getPostList = () => state => state.postList.postList;
export const getPostById = postId => state => state.postList.postList.find(post => post._id === postId);
export const getPostByUser = userId => state => state.postList.postList.filter(post => post.userId === userId);
export const getLoadingPostList = () => state => state.postList.isLoading;

export default postListReducer;
