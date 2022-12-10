import { Box } from "@mui/material";
import styles from "./App.module.css";
import Main from "./component/Main/Main";
function App() {
  return (
    <Box className={styles.Main}>
      <Main />
    </Box>
  );
}

export default App;
