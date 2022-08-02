import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type State = {
  current: string;
};

const initialState: State = {
  current: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSetToLight: (state) => {
      state.current = "light";
    },

    themeSetToDark: (state) => {
      state.current = "dark";
    },
  },
});

export const { themeSetToDark, themeSetToLight } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.current;

export default themeSlice.reducer;
