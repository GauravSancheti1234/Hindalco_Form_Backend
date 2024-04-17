const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hiluat", "postgres", "postgres", {
  host: "140.238.240.29",
  dialect: "postgres",
});
console.log("db connected");

module.exports = sequelize;
