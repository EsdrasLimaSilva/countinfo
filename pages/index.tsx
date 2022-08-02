import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Content from "../containers/Content";
import { countriesSet, CountryState } from "../app/slices/countries";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Button, Typography } from "@mui/material";
import {
  selectTheme,
  themeSetToDark,
  themeSetToLight,
} from "../app/slices/themeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

type StaticProps = {
  africaCountries: CountryState[];
  americaCountries: CountryState[];
  asiaCountries: CountryState[];
  europeCountries: CountryState[];
  oceaniaCountries: CountryState[];
};

const Home: NextPage<StaticProps> = ({
  africaCountries,
  americaCountries,
  asiaCountries,
  europeCountries,
  oceaniaCountries,
}) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(
    function setAllCountries() {
      dispatch(
        countriesSet({
          africaCnts: africaCountries,
          americaCnts: americaCountries,
          asiaCnts: asiaCountries,
          europeCnts: europeCountries,
          oceaniaCnts: oceaniaCountries,
        })
      );
    },
    [
      africaCountries,
      americaCountries,
      asiaCountries,
      dispatch,
      europeCountries,
      oceaniaCountries,
    ]
  );

  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(themeSetToDark());
    } else {
      dispatch(themeSetToLight());
    }
  };

  return (
    <>
      <Head>
        <title>Countinfo</title>
      </Head>
      <AppBar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 20px",
          boxShadow: "2px 2px 4px #00000030",
        }}
        color="primary"
        position="relative"
      >
        <Typography variant="h5" component="h1" fontWeight="bold">
          Where in the world?
        </Typography>
        <Button
          color="secondary"
          startIcon={theme === "light" ? <DarkModeIcon /> : <WbSunnyIcon />}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark theme" : "Light theme"}
        </Button>
      </AppBar>
      <Content />
    </>
  );
};

export async function getStaticProps() {
  const africaResponse = await fetch(
    "https://restcountries.com/v3.1/region/africa"
  );
  const americaResponse = await fetch(
    "https://restcountries.com/v3.1/region/america"
  );
  const asiaResponse = await fetch(
    "https://restcountries.com/v3.1/region/asia"
  );
  const europeResponse = await fetch(
    "https://restcountries.com/v3.1/region/europe"
  );
  const oceaniaResponse = await fetch(
    "https://restcountries.com/v3.1/region/oceania"
  );

  const africaData = await africaResponse.json();
  const americaData = await americaResponse.json();
  const asiaData = await asiaResponse.json();
  const europeData = await europeResponse.json();
  const oceaniaData = await oceaniaResponse.json();

  return {
    props: {
      africaCountries: africaData,
      americaCountries: americaData,
      asiaCountries: asiaData,
      europeCountries: europeData,
      oceaniaCountries: oceaniaData,
    },
  };
}

export default Home;
