import express, { Request, Response, NextFunction } from "express";
import { getUserByNickname } from "./Api/Cyphers/cypherUser";
import cors from "cors";
import "./util/env";
import { User } from "./models/user";
import { Comment } from "./models/comment";
import { saveUserNickname } from "./controllers/users";
import bodyParser from "body-parser";
import { loadComment, saveComments } from "./controllers/comments";
import { router } from "./routes/user";
const app = express();
const allowedOrigins = ["http://localhost:3000", "http:cypp.link:3000", "http:cypp.link"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("*", (req: Request, res: Response) => res.sendFile(__dirname, "index.html"));
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi!");
});
app.use("/user", router);
User.sync({ force: true });
Comment.sync({ force: true });
app.listen("8000", () => {
  console.log(`
      #############################################
          🛡️ Server listening on port: 8000 🛡️
      #############################################    
      `);
});
