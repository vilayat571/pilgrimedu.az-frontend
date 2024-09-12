import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginForm } from "../../../pages/Login/Login";

export interface IInitialStateLogin {
  data?: null | PayloadAction;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialStateLogin = {
  data: null,
  loading: false,
  error: null,
};

export const loginFormSender = createAsyncThunk(
  "/loginFormSender",
  async (loginForm: ILoginForm ) => {
    const url = `${process.env.REACT_API_URL}/api/v1/users/login`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(loginForm), // body data type must match "Content-Type" header
    });

    return response.json();
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginFormSender.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
      state.data = null;
    });

    builder.addCase(loginFormSender.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });

    builder.addCase(loginFormSender.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.data = null;
    });
  },
});

export default loginSlice.reducer;
