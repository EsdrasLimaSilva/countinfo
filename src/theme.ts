import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#222222",
    },
    background: {
      default: "#f3f3f3",
      paper: "#ffffff",
    },
    error: {
      main: red.A400,
    },
  },
});

lightTheme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.3rem",
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b4951",
    },
    secondary: {
      main: "#f5f5f5",
    },
    background: {
      default: "#212e37",
      paper: "#3b4951",
    },
    error: {
      main: red.A400,
    },
  },
});

darkTheme.typography.h5 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.3rem",
  },
};
