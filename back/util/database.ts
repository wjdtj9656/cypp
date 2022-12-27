import { Sequelize } from "sequelize";
const sequelize = new Sequelize("exuser", "root", process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  define: {
    underscored: true,
    freezeTableName: true, //use singular table name
  },
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: function (field: any, next: any) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "+09:00",
});

export { sequelize };
