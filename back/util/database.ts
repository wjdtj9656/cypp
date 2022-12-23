import { Sequelize } from "sequelize";
const sequelize = new Sequelize("exuser", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
