const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('inyourcorner', 'inyourcorner', 'inyourcorner', {
    host: 'localhost',
    dialect: 'mysql',
    dbHost: 'vision.herosite.pro',
    dbPort: 3306,
    dbName: 'inyourcorner',
    dbUsername: 'inyourcorner',
    dbPassword: 'inyourcorner',
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }