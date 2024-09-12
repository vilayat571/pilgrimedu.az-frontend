import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IResults {
  resultImg: string;
  title: string;
  id?: number;
}

interface IInitialState {
  results: IResults[] | null;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: IInitialState = {
  results: null,
  loading: false,
  error: null,
};

export const fetchResults = createAsyncThunk("/fetchResults", async () => {
  const url = `${import.meta.env.VITE_API_URL}/images`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
});





const resultsSlicer = createSlice({
  name: "resultsSlicer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResults.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.results = null;
    });
    builder.addCase(fetchResults.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchResults.rejected, (state, action) => {
      state.results = null;
      state.loading = true;
      state.error = action.error.message;
    });
  },
});

export default resultsSlicer.reducer;
