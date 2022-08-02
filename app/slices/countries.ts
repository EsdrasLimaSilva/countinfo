import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CountryState = {
  subregion: string;
  population: number;
  region: string;
  flags: {
    png: string;
  };
  capital: string[];
  name: {
    official: string;
    common: string;
  };
  languages: {};
  currencies: {};
  borders: string[];
};

type State = {
  countries: {
    africa: CountryState[];
    asia: CountryState[];
    america: CountryState[];
    europe: CountryState[];
    oceania: CountryState[];
  };

  currentRegion: CountryState[];
  all: CountryState[];
};

const initialState: State = {
  countries: {
    africa: [],
    asia: [],
    america: [],
    europe: [],
    oceania: [],
  },

  currentRegion: [],
  all: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    countriesSet: (
      state,
      action: PayloadAction<{
        africaCnts: CountryState[];
        asiaCnts: CountryState[];
        americaCnts: CountryState[];
        europeCnts: CountryState[];
        oceaniaCnts: CountryState[];
      }>
    ) => {
      const { africaCnts, asiaCnts, americaCnts, europeCnts, oceaniaCnts } =
        action.payload;

      state.countries.africa = africaCnts;
      state.countries.asia = asiaCnts;
      state.countries.america = americaCnts;
      state.countries.europe = europeCnts;
      state.countries.oceania = oceaniaCnts;

      state.currentRegion = africaCnts;

      state.all = africaCnts
        .concat(asiaCnts)
        .concat(americaCnts)
        .concat(europeCnts)
        .concat(oceaniaCnts);
    },

    currentRegionChanged: (state, action: PayloadAction<CountryState[]>) => {
      state.currentRegion = action.payload;
    },
  },
});

export const { countriesSet, currentRegionChanged } = countriesSlice.actions;
export const selectCountries = (state: RootState) => state.countries;

export default countriesSlice.reducer;
