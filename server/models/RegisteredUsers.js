// model.js

const Sequelize = require('sequelize');
const sequelize = require('../service/sequelize');

const RegisteredUsers = sequelize.define('registerusers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  registerEmail: {
    type: Sequelize.STRING,
  },
});

module.exports = RegisteredUsers;