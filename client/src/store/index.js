import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slicer";
import searchReducer from "./search.slicer";
import postListReducer from "./postList.slicer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  postList: postListReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: process.env.NODE_ENV !== "production"
});
export default store;
