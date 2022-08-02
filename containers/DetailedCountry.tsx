/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/system";
import { selectDetailedCountryData } from "../app/slices/detailedCountry";
import { useEffect } from "react";
import ButtonBack from "../components/ButtonBack";

type StateInfo = {
  inf: string;
  value: string | number;
};

function Info({ inf, value }: StateInfo) {
  return (
    <Typography variant="subtitle2" component="h3" my={0.5}>
      <strong>{inf}: </strong> {value}
    </Typography>
  );
}

function DetailedCountry() {
  const { data } = useSelector(selectDetailedCountryData);
  const theme = useTheme();
  const currencies: { name: string; symbol: string }[] = Object.values(
    data.currencies
  );
  const languages: String[] = Object.values(data.languages);

  useEffect(() => console.log(languages));

  return (
    <>
      <ButtonBack />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 2,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ width: { sm: "200px", md: "400px" }, marginRight: "20px" }}
          >
            <img
              src={data.flags.png}
              alt="country flag"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" component="h2" maxWidth={500}>
              {data.name.common}
            </Typography>

            <Info inf="Official name" value={String(data.name.official)} />
            <Info inf="Population" value={String(data.population)} />
            <Info inf="Region" value={String(data.region)} />
            <Info inf="Sub region" value={String(data.subregion)} />
            <Info inf="Population" value={String(data.population)} />

            <Typography variant="subtitle2" component="h3" my={0.5}>
              <strong>Currencies:</strong>{" "}
              {currencies.map((currencie, i) => {
                if (i + 1 === currencies.length) {
                  return currencie.name;
                } else {
                  return currencie.name + ", ";
                }
              })}
            </Typography>

            <Typography
              variant="subtitle2"
              component="h3"
              maxWidth="300px"
              textAlign="justify"
              my={0.5}
            >
              <strong>Languages: </strong>
              {languages.map((language, i) => {
                if (i + 1 === languages.length) {
                  return language;
                } else {
                  return language + ", ";
                }
              })}
            </Typography>

            {data.borders && data.borders.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                }}
              >
                <Typography
                  variant="subtitle2"
                  component="h3"
                  width={50}
                  mr={2}
                >
                  <strong>Borders: </strong>
                </Typography>
                <Grid
                  container
                  justifyContent="end"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "start",
                    maxWidth: "500px",
                  }}
                >
                  {data.borders.map((border, i) => {
                    return (
                      <Grid
                        item
                        key={border}
                        mr={2}
                        sx={{
                          width: 50,
                          textAlign: "center",
                          borderRadius: 0,
                          display: "inline",
                          background: theme.palette.background.paper,
                        }}
                      >
                        {border}
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default DetailedCountry;
