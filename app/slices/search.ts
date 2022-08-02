import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type State = {
  term: "string";
};

const initialState = {
  term: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchTermChanged: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { searchTermChanged } = searchSlice.actions;
export const selectSearchTerm = (state: RootState) => state.search.term;

export default searchSlice.reducer;
