import { Box, Button, Pagination, TextField, ThemeProvider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { loadComments, saveComment } from "../../Api/Comment/comment";
import { getUserByNickname } from "../../Api/Cyphers/cyphersUser";
import colorTheme from "../../theme/colorTheme";
import styles from "./UserInfo.module.css";
const UserInfo = () => {
  const location = useLocation();
  const [nickname, setNickname] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [pageNo, setPageNo] = useState<number>(1);
  const [commentSize, setCommentSize] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) navigate("/");
    setNickname(location.state.nickname);
  }, []);

  const getPlayerId = async (nickname: string) => {
    if (!nickname) return;
    const result = await getUserByNickname(nickname);
    return result[0].playerId;
  };
  const loadComment = async () => {
    const playerId = await getPlayerId(nickname);
    const [commentLegnth, commentList] = await loadComments(playerId, pageNo);
    let size = Math.ceil(commentLegnth / 5);
    if (size === 0) size = 1;
    setCommentSize(size);
    setChat([...commentList]);
  };
  useEffect(() => {
    loadComment();
  }, [pageNo, nickname]);
  return (
    <Box className={styles.userMain}>
      <Box className={styles.userInfo}>
        <Typography sx={{ fontSize: 50, paddingTop: 20 }}>{nickname}</Typography>
        <Box sx={{ paddingTop: 5 }}>
          <ThemeProvider theme={colorTheme}>
            <TextField
              id="outlined-multiline-flexible"
              color="default"
              multiline
              maxRows={5}
              className={styles.inputBox}
              placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 통보없이 삭제됩니다."
              onChange={(e) => {
                if (text.length >= 500) {
                  setText(text.substring(0, 499));
                  return;
                }
                setText(e.target.value);
              }}
              value={text}
            />
            <Typography sx={{ display: "flex", justifyContent: "right", opacity: 0.4 }}>
              {text.length}/500
            </Typography>
          </ThemeProvider>
        </Box>
        <Button
          sx={{
            width: 300,
            color: "black",
            border: "1px solid black",
            floodColor: "black",
          }}
          onClick={async () => {
            //빈 값
            if (!text) return;
            if (text.length > 500) {
              alert("글자 수 제한은 500 입니다.");
              return;
            }
            const userData = await getUserByNickname(nickname);
            const userInfo = userData[0];
            await saveComment(userInfo.playerId, text);
            // setChat([...chat, text]);
            setPageNo(1);
            setText("");
            loadComment();
          }}
        >
          작성하기
        </Button>
        <Box>
          {chat.map((v, index) => (
            <Box className={styles.logBoard} key={index}>
              <Typography sx={{ overflowWrap: "break-word" }}>{`${v[0]}`}</Typography>
              <Typography
                sx={{ fontSize: 10, display: "flex", justifyContent: "right", marginRight: 1 }}
              >
                {v[1]}
              </Typography>
            </Box>
          ))}
        </Box>
        <Pagination
          count={commentSize}
          page={pageNo}
          size="small"
          showFirstButton
          showLastButton
          onChange={(event: any, num: number) => {
            setPageNo(num);
          }}
        />
      </Box>
    </Box>
  );
};
export default UserInfo;
