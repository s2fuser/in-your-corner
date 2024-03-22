// model.js

const Sequelize = require('sequelize');
const sequelize = require('../service/sequelize');

const EmbeddedCodeModel = sequelize.define('embeddedcode', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  topics: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
});

module.exports = EmbeddedCodeModel;