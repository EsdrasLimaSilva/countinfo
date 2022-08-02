import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentRegionChanged, selectCountries } from "../app/slices/countries";

function SelectFilter() {
  const [currentRegionInput, setCurrentRegionInput] = useState(1);
  const countries = useSelector(selectCountries);
  const dispatch = useDispatch();
  const theme = useTheme();

  /* 
  
   value | region:

   1 | africa
   2 | america
   3 | asia
   4 | europe
   5 | oceania

  */
  const handleChange = (e: SelectChangeEvent<number>) => {
    const value = Number((e.target as HTMLInputElement).value);

    setCurrentRegionInput(value);

    switch (value) {
      case 1:
        dispatch(currentRegionChanged(countries.countries.africa));
        break;
      case 2:
        dispatch(currentRegionChanged(countries.countries.america));
        break;
      case 3:
        dispatch(currentRegionChanged(countries.countries.asia));
        break;
      case 4:
        dispatch(currentRegionChanged(countries.countries.europe));
        break;
      case 5:
        dispatch(currentRegionChanged(countries.countries.oceania));
        break;
    }
  };

  return (
    <FormControl
      component="form"
      sx={{
        width: 150,
        marginTop: 2,
        border: `1px solid ${theme.palette.secondary}`,
        boxShadow: "2px 2px 4px #00000030",
      }}
    >
      <Select
        label="region"
        value={currentRegionInput}
        onChange={(e) => handleChange(e)}
        sx={{
          background: theme.palette.background.paper,
          padding: 1,
        }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        variant="standard"
        disableUnderline
      >
        <MenuItem value={1}>Africa</MenuItem>
        <MenuItem value={2}>America</MenuItem>
        <MenuItem value={3}>Asia</MenuItem>
        <MenuItem value={4}>Europe</MenuItem>
        <MenuItem value={5}>Oceania</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectFilter;
