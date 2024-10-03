import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IBlog {
  _id: number;
  thumbnail: string;
  title: string;
  date: string;
  body:  string;
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

export const fetchBlogs = createAsyncThunk(
  "/fetchData",
  async ({ limit }: { limit: number | undefined; }) => {
    const url = `http://localhost:3001/api/v1/blogs/?skip=0&limit=${limit}`
    console.log(limit)

    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

const getAllBlogs = createSlice({
  name: "getAllBlogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.blogs = null;
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.blogs;
        state.loading = false;
        state.error = null;
      }),
    builder.addCase(fetchBlogs.rejected, (state) => {
      state.blogs = null;
      state.loading = true;
      state.error = "there is an error";
    });
  },
});
export default getAllBlogs.reducer;
