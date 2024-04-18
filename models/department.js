const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Department = sequelize.define('Department', {
  desg_mr_desg_code: {
    type: DataTypes.STRING(7),
    allowNull: false,
    primaryKey: true
  },
  desg_mr_desg_desc: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
}, {
  tableName: 'ppis_designation_master',
  timestamps: false,
  schema: 'ppis'
});


module.exports = Department;
