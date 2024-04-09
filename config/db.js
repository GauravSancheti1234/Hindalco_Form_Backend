const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hiluat', 'postgres', '1234', {
  host: '140.238.240.29',
  dialect: 'postgres'
});

module.exports = sequelize;
