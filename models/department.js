const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Department = sequelize.define('Department', {
    dept_mr_dept_code: {
    type: DataTypes.STRING(3),
    allowNull: false,
    primaryKey: true
  },
  dept_mr_dept_short_desc: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  dept_mr_dept_desc: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  dept_mr_po_desc: {
    type: DataTypes.STRING(2),
    allowNull: true
  }
}, {
    tableName: 'ppis_dept_master',
    timestamps: false,
    schema: 'ppis' 
});


module.exports = Department;
