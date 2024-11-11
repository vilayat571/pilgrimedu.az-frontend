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
    const url = `https://pilgrimedu.az/api/v1/questions/add`;
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData); // Log server response
        throw new Error(`Server error: ${errorData.message || "Conflict"}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error during post request:");
      throw error;
    }
  }
)  

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
