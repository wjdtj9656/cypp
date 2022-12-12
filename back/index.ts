import express, { Request, Response, NextFunction } from "express";
import { getUserByNickname } from "./Api/Cyphers/cypherUser";
import cors from "cors";
import "./util/env";
const app = express();
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi!");
});
app.get("/user/:nickname", cors(), async (req: Request, res: Response, next: NextFunction) => {
  const userData = await getUserByNickname(req.params.nickname);
  res.json(userData.rows);
});
app.listen("8000", () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: 8000 🛡️
    #############################################    
    `);
});
