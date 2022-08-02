import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { useTheme } from "@mui/system";
import { useDispatch } from "react-redux";
import { changedToHome } from "../app/slices/operation";

function ButtonBack() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Button
      variant="outlined"
      component="button"
      startIcon={<KeyboardBackspaceIcon />}
      color="secondary"
      sx={{
        margin: "20px 20px",
        backgroundColor: theme.palette.background.paper,
        border: "none",
        boxShadow: "2px 2px 4px #00000030",
      }}
      onClick={() => dispatch(changedToHome())}
    >
      Back
    </Button>
  );
}

export default ButtonBack;
