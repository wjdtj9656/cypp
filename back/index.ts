import express, { Request, Response, NextFunction } from "express";
import { getUserByNickname } from "./Api/Cyphers/cypherUser";
import cors from "cors";
import "./util/env";
import { sequelize } from "./util/database";
import { DataTypes } from "sequelize";
import { User } from "./models/user";
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
// sequelize.define("hehe", { id: { type: DataTypes.INTEGER, primaryKey: true } });
// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result);
//     console.log("All models were synchronized successfully.");
//     // sequelize.drop();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
User.sync({ force: true });
app.listen("8000", () => {
  console.log(`
      #############################################
          🛡️ Server listening on port: 8000 🛡️
      #############################################    
      `);
});
