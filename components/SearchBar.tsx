import SearchIcon from "@mui/icons-material/Search";
import { Button, FormControl, Input, useTheme } from "@mui/material";
import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { changedToSearching } from "../app/slices/operation";
import { searchTermChanged } from "../app/slices/search";

function SearchBar() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    const form = e.target as HTMLFormElement;

    e.preventDefault();

    dispatch(searchTermChanged((form[1] as HTMLInputElement).value));
    dispatch(changedToSearching());
  };

  return (
    <FormControl
      onSubmit={(e: FormEvent) => handleSubmit(e)}
      component="form"
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "row",
        padding: "8px 10px",
        boxShadow: "2px 2px 4px #00000030",
        width: "90vw",
        [theme.breakpoints.up("sm")]: {
          width: "600px",
        },
      }}
    >
      <Button variant="text" type="submit" color="secondary">
        <SearchIcon />
      </Button>
      <Input
        type="search"
        required
        placeholder="search for a country"
        sx={{ width: "80%" }}
        disableUnderline
      />
    </FormControl>
  );
}

export default SearchBar;
