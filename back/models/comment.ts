import { DataTypes } from "sequelize";
import { sequelize } from "../util/database";

const Comment = sequelize.define(
  "comments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    playerId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  { freezeTableName: true }
);
export { Comment };
