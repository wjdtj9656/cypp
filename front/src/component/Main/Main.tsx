import { Autocomplete, Box, TextField, ThemeProvider, Typography } from "@mui/material";
import colorTheme from "../../theme/colorTheme";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <Box className={styles.Main}>
      <Box>
        <Typography sx={{ fontSize: 50 }}>CPPP</Typography>
      </Box>
      <Box className={styles.searchBar}>
        <ThemeProvider theme={colorTheme}>
          <Autocomplete
            id="userName"
            freeSolo
            options={["Ahah", "hehe"]}
            renderInput={(params) => (
              <TextField {...params} label="아이디 검색" color="neutralShade" />
            )}
          />
        </ThemeProvider>
      </Box>
    </Box>
  );
};
export default Main;
