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
import https from "https";
import fs from "fs";
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
if (process.env.NODE_ENV == "production") {
  try {
    const option = {
      ca: fs.readFileSync("/etc/letsencrypt/archive/cypp.link/fullchain1.pem"),
      key: fs.readFileSync("/etc/letsencrypt/archive/cypp.link/privkey1.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/archive/cypp.link/cert1.pem"),
    };
    https.createServer(option, app).listen(8000, () => {
      console.log(`
      ####################HTTPS####################
          🛡️ Server listening on port: 8000 🛡️
      #############################################    
      `);
    });
  } catch (error) {
    console.log("https 서버가 열리지 않았습니다.");
    console.log(error);
  }
} else
  app.listen("8000", () => {
    console.log(`
      #############################################
          🛡️ Server listening on port: 8000 🛡️
      #############################################    
      `);
  });
