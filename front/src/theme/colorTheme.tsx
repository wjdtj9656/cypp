import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutralShade: { main: string };
    default: { main: string };
  }

  interface PaletteOptions {
    neutralShade?: { main: string };
    default?: { main: string };
  }
}
const colorTheme = createTheme({
  palette: {
    default: {
      main: "black",
    },
    neutralShade: {
      main: "white",
    },
  },
});
export default colorTheme;
