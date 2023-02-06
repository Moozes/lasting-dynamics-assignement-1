import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: [
          '"Inter"',
          'sans-serif',
        ].join(','),
      },
    palette: {
        darkBlue: {
            main: "#04385A"
        }
    }
} as any)