import { Autocomplete, Box, TextField, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getUserByNickname } from "../../Api/Cyphers/cyphersUser";
import colorTheme from "../../theme/colorTheme";
import styles from "./Main.module.css";
const Main = () => {
  const [nickname, setNickname] = useState("");
  const [nowUser, setNowUser] = useState([]);
  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
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
            options={[...nowUser]}
            value={value}
            onChange={(event, newValue: string | null) => {
              if (newValue) {
                setValue(newValue);
                navigate(`/user/${newValue}`, {
                  state: {
                    nickname: newValue,
                  },
                });
              }
            }}
            // onInputChange={(event, newInputValue) => {
            //   setInputValue(newInputValue);
            //   console.log(value);
            // }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="아이디 검색"
                color="neutralShade"
                // onChange={(e) => setNickname(e.target.value)}
                onChange={async (e) => {
                  setNickname(e.target.value);
                  const result = await getUserByNickname(e.target.value);
                  const nickNameArr = result.map((item: any) => item.nickname);
                  setNowUser(nickNameArr);
                }}
              />
            )}
          />
        </ThemeProvider>
        {/* <button
          onClick={async () => {
            const result = await getUserByNickname(nickname);
            const nickNameArr = result.map((item: any) => item.nickname);
            setNowUser(nickNameArr);
          }}
        >
          haha
        </button> */}
      </Box>
    </Box>
  );
};
export default Main;
