import { DataTypes } from "sequelize";
import { sequelize } from "../util/database";

const User = sequelize.define(
  "users",
  {
    playerId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
export { User };
