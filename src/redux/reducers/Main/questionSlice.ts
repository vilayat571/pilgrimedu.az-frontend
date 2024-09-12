import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IQuestionForm } from "../../../components/Main/Askquestion";

export interface IinitialState {
  question: IQuestionForm | string;
  loading: boolean;
  error: string;
}

export const postQuestion = createAsyncThunk(
  "/postQuestion",
  async (data: IQuestionForm) => {
    const url = `${import.meta.env.VITE_API_URL}/questions/add`;

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
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
  }
);

const initialState: IinitialState = {
  question: "",
  error: "",
  loading: false,
};

const questionSlice = createSlice({
  name: "questionSlice",
  reducers: {},
  initialState,
  extraReducers(builder) {
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      state.question = action.payload;
    });
  },
});

export default questionSlice.reducer;
