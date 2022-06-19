import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("blog/fetchNews", async () => {
  try {
    const { data } = await axios.get(
      "https://62ae44a6b735b6d16a40a5cd.mockapi.io/news"
    );
    return data;
  } catch (error) {
    console.log("Error");
  }
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    news: [],
    status: null,
    error: null,
  },
  reducers: {
    setItems(state, action) {
      state.news = action.payload;
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = "loading";
      state.status = null;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = "success";
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {},
  },
});

export const { setMedia } = blogSlice.actions;

export default blogSlice.reducer;
