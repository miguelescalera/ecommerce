const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:matute10@localhost:5432/winenot",
  {
    logging: false,
    dialect: "postgres"
  }
);

module.exports = db;
