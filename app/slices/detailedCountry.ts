import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CountryState } from "./countries";

export type DetailedCountryState = {
  data: CountryState;
};

const initialState: DetailedCountryState = {
  data: {
    subregion: "",
    population: 0,
    region: "",
    flags: {
      png: "",
    },
    capital: [],
    name: {
      official: "",
      common: "",
    },
    languages: {},
    currencies: {},
    borders: [],
  },
};

const detailedCountrySlice = createSlice({
  name: "detailedCountry",
  initialState,
  reducers: {
    dataSet: (state, action: PayloadAction<CountryState>) => {
      state.data = action.payload;
    },
  },
});

export const { dataSet } = detailedCountrySlice.actions;
export const selectDetailedCountryData = (state: RootState) =>
  state.detailedCountry;

export default detailedCountrySlice.reducer;
