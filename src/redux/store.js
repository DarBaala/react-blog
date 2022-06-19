import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slisec/blogSlice";

export const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});
