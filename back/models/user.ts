import { DataTypes } from "sequelize";
import { sequelize } from "../util/database";

const User = sequelize.define("person", {
  playerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export { User };
