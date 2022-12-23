import { DataTypes } from "sequelize";
import { sequelize } from "../util/database";

const Comment = sequelize.define(
  "comments",
  {
    playerId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true }
);
export { Comment };
