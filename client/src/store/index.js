import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slicer";

const rootReducer = combineReducers({
  user: userReducer
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
