import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [
    {
      discription: "От фотографа до Frontend разработчика",
      imageUrl: require("../../assets/img/slide-1.webp"),
    },
    {
      discription: "От фотографа до",
      imageUrl: require("../../assets/img/slide-2.webp"),
    },
    {
      discription: "От фотографа до Frontend разработчика",
      imageUrl: require("../../assets/img/slide-3.webp"),
    },
    {
      discription: "От фотографа до Frontend разработчика",
      imageUrl: require("../../assets/img/slide-4.webp"),
    },
  ],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setMedia(state, action) {
      state.news = action.payload;
    },
  },
});

export const { setMedia } = blogSlice.actions;

export default blogSlice.reducer;
