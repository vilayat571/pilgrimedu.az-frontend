import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IBlog {
  _id: number;
  thumbnail: string;
  title: string;
  date: string;
  body: string;
  description: string;
  author: string;
}

export interface IInitialStateAllBlogs {
  blogs: IBlog[] | null | undefined;
  loading?: boolean;
  error?: string | null;
}

const initialState: IInitialStateAllBlogs = {
  blogs: null,
  loading: false,
  error: null,
};

export const fetchThree = createAsyncThunk("/fetchThree", async () => {
  const url = `${import.meta.env.VITE_API_URL}/blogs/?skip=0&limit=3`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
});

const threeBlogs = createSlice({
  name: "threeBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThree.pending, (state) => {
      state.blogs = null;
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchThree.fulfilled, (state, action) => {
        state.blogs = action.payload.blogs;
        state.loading = false;
        state.error = null;
      }),
      builder.addCase(fetchThree.rejected, (state) => {
        state.blogs = null;
        state.loading = true;
        state.error = "there is an error";
      });
  },
});
export default threeBlogs.reducer;
