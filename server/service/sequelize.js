const Sequelize = require("sequelize");

const sequelize = new Sequelize("inyourcorner", "inyourcorner", "inyourcorner", {
  host: "vision.herosite.pro",
  dialect: "mysql", // Change this to match your database type (e.g. postgres, sqlite)
});

sequelize
  .sync()
  .then(() => {
    console.log("Database and tables created!");
  })
  .catch((err) => {
    console.error("Error creating database and tables: ", err);
  });

  module.exports = sequelize;