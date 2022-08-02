import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type State = {
  current: string;
};

const initialState: State = {
  current: "home",
};

const operationSlice = createSlice({
  name: "operation",
  initialState,
  reducers: {
    changedToHome: (state) => {
      state.current = "home";
    },

    changedToDetailed: (state) => {
      state.current = "detailed";
    },

    changedToSearching: (state) => {
      state.current = "search";
    },
  },
});

export const { changedToHome, changedToDetailed, changedToSearching } =
  operationSlice.actions;
export const selectOperation = (state: RootState) => state.operation.current;

export default operationSlice.reducer;
