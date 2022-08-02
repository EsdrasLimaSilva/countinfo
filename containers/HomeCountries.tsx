import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import SelectFilter from "../components/SelectFilter";
import { selectCountries } from "../app/slices/countries";
import CountryCard from "../components/CountryCard";

function HomeCountries() {
  const countries = useSelector(selectCountries);

  return (
    <>
      <Box padding={2}>
        <SearchBar />
        <SelectFilter />
      </Box>
      <Grid container justifyContent="center" spacing={3} padding={3}>
        {countries.currentRegion.slice(0, 12).map((country) => (
          <Grid
            item
            key={country.name + String(country.population)}
            marginY={2}
          >
            <CountryCard
              name={country.name.common}
              capital={country.capital[0]}
              flag={country.flags.png}
              population={String(country.population)}
              region={country.region}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default HomeCountries;
