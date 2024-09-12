import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRegisterForm } from "../../../pages/Register/Register";

export interface IinitialStateOfRegister {
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IinitialStateOfRegister = {
  loading: false,
  error: null,
};

export const sendRegisterForm = createAsyncThunk(
  "/sendRegisterForm",
  async (form: IRegisterForm) => {


    const url = `${import.meta.env.VITE_API_URL}/users/add`;
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
      body: JSON.stringify(form), // body data type must match "Content-Type" header
    });
    return response.json();
  }
);

const registerSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendRegisterForm.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      console.log(action.payload);
    });
  },
});

export default registerSlice.reducer;
