import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutralShade: { main: string };
  }

  interface PaletteOptions {
    neutralShade?: { main: string };
  }
}
const colorTheme = createTheme({
  palette: {
    neutralShade: {
      main: "white",
    },
  },
});
export default colorTheme;
