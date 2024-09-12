import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import questionSlice from "../reducers/Main/questionSlice.ts";
import getAllBlogs from "../reducers/Blogs/getAllBlogs.ts";
import threeBlogs from "../reducers/Main/threeBlogs.ts";
import resultsSlicer from "../reducers/Main/resultsSlicer.tsx";
import registerSlice from "../reducers/auth/registerSlice.ts";
import loginSlice from "../reducers/auth/loginSlice.tsx";

export const store = configureStore({
  reducer: {
    questionSlice: questionSlice,
    getAllBlogs: getAllBlogs,
    threeBlogs: threeBlogs,
    resultsSlicer: resultsSlicer,
    registerSlice: registerSlice,
    loginSlice:loginSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
