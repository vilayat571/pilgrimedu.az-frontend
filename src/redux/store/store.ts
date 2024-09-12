import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import questionSlice from "../reducers/Main/questionSlice.ts";
import resultsSlicer from "../reducers/Main/resultsSlicer.tsx";

export const store = configureStore({
  reducer: {
    questionSlice: questionSlice,
    resultsSlicer: resultsSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
