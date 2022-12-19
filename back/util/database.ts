import { Sequelize } from "sequelize";
const sequelize = new Sequelize("exuser", "root", "ssafy", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
