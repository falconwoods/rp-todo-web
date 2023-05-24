import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            disableElevation: true,
          },
        },
      },
    },
  });

  export default theme;
  