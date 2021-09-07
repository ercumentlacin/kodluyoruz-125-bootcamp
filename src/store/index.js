import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import formsSlice from "./slices/formsSlice";

const store = configureStore({
  reducer: {
    forms: formsSlice
  }
});

export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;

export default store;
