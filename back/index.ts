import express, { Request, Response, NextFunction } from "express";
import { getUserByNickname } from "./Api/Cyphers/cypherUser";
import cors from "cors";
import "./util/env";
import { User } from "./models/user";
import { Comment } from "./models/comment";
import { saveUserNickname } from "./controllers/users";
import bodyParser from "body-parser";
import { loadComment, saveComments } from "./controllers/comments";
const app = express();
const allowedOrigins = ["http://localhost:3000", "http:cypp.link:3000", "http:cypp.link"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("*",(req:Request, res:Response)=>res.sendFile(__dirname, "index.html"));
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi!");
});
app.get("/user/:nickname", cors(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = await getUserByNickname(req.params.nickname);
    res.json({ ok: true, userData: userData.rows });
  } catch (e) {
    // console.log(e);
  }
});
app.get("/user/info/:nickname", async (req: Request, res: Response, next: NextFunction) => {
  try {
    saveUserNickname(req.params.nickname);
    res.json({ ok: true });
  } catch (e) {
    console.log(e);
  }
});
app.post("/user/comments", cors(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    saveComments(req.body);
    res.json({ ok: true });
  } catch (e) {
    console.log(e);
  }
});
app.get("/user/comments/:playerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result: any = await loadComment(req.params.playerId);
    const commentList = [];
    result.sort((a: any, b: any) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    let pageNo = Number(req.query.pageno) - 1;
    let countPerPage = Number(req.query.countperpage);
    let index = countPerPage * pageNo;
    for (let i = index; i < index + countPerPage; i++) {
      if (!result[i]) break;
      commentList.push([result[i].comment, result[i].createdAt]);
    }
    res.json({ ok: true, commentInfo: [result.length, commentList], result });
  } catch (e) {
    console.log(e);
  }
});
User.sync({ force: true });
Comment.sync({ force: true });
app.listen("8000", () => {
  console.log(`
      #############################################
          🛡️ Server listening on port: 8000 🛡️
      #############################################    
      `);
});
