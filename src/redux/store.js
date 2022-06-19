import { configureStore } from "@reduxjs/toolkit";
import blog from "./slices/blogSlice";
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    blog,
    user,
  },
});
