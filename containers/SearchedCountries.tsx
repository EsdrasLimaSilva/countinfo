import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CountryState, selectCountries } from "../app/slices/countries";
import { selectSearchTerm } from "../app/slices/search";
import ButtonBack from "../components/ButtonBack";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";

function SearchedCountries() {
  const countries = useSelector(selectCountries);
  const searchTerm = useSelector(selectSearchTerm);
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState<CountryState | null>(null);

  useEffect(
    function findCountry() {
      const cnty = countries.all.find(
        (country) =>
          country.name.common.toLocaleLowerCase() === searchTerm.toLowerCase()
      );

      if (cnty) {
        setCountryData(cnty);
      } else {
        setCountryData(null);
      }

      setLoading(false);
    },
    [searchTerm]
  );

  return (
    <Box padding={2}>
      <SearchBar />
      <ButtonBack />
      {loading ? (
        <Container sx={{ Width: "100vw" }}>
          <Typography
            variant="h6"
            component="h3"
            textAlign="center"
            sx={{ marginTop: "100px" }}
          >
            Loading...
          </Typography>
        </Container>
      ) : countryData ? (
        <>
          <Container>
            <CountryCard
              key={countryData.name.common}
              capital={countryData.capital[0]}
              flag={countryData.flags.png}
              name={countryData.name.common}
              population={String(countryData.population)}
              region={countryData.region}
            />
          </Container>
        </>
      ) : (
        <Typography variant="h5" component="h3" textAlign="center" mt={20}>
          Country not found
        </Typography>
      )}
    </Box>
  );
}

export default SearchedCountries;
