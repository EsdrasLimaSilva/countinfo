import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCountries } from "../app/slices/countries";
import { dataSet, DetailedCountryState } from "../app/slices/detailedCountry";
import { changedToDetailed } from "../app/slices/operation";

type State = {
  flag: string;
  capital: string;
  name: string;
  population: string;
  region: string;
};

const formatStr = (str: string) => {
  const strArr = str.split("");

  if (strArr.length > 18) return strArr.slice(0, 18).join("") + "...";

  return strArr.join("");
};

function CountryCard({ flag, capital, name, population, region }: State) {
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();

  const handleClick = () => {
    const country = countries.all.find(
      (country) => country.name.common === name
    )!;

    dispatch(changedToDetailed());
    dispatch(dataSet(country));
  };

  return (
    <Card sx={{ width: 250, height: 300 }} elevation={2}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={flag}
          height={70}
          alt={`flag of ${name}`}
          sx={{ height: 150 }}
        />
        <CardContent sx={{ padding: 1 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {formatStr(name)}
          </Typography>
          <Typography variant="subtitle2" component="h2">
            <strong>Population:</strong> {population}
          </Typography>
          <Typography variant="subtitle2" component="h2">
            <strong>Region:</strong> {region}
          </Typography>
          <Typography variant="subtitle2" component="h2">
            <strong>capital:</strong> {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CountryCard;
