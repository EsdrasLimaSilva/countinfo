import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import themeReducer from "./slices/themeSlice";
import operationReducer from "./slices/operation";
import countriesReducer from "./slices/countries";
import detailedCountryReducer from "./slices/detailedCountry";
import searchReducer from "./slices/search";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    operation: operationReducer,
    countries: countriesReducer,
    detailedCountry: detailedCountryReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore, { debug: false });
