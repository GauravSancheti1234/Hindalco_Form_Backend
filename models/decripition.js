const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Description = sequelize.define('Description', {
  dm_field_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  dm_field_descr: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  dm_earn_dedn_type: {
    type: DataTypes.STRING(1),
    allowNull: false
  },
  dm_sequence_no: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dm_account_no: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  dm_shoporder_no: {
    type: DataTypes.STRING(9)
  },
  dm_amount: {
    type: DataTypes.NUMERIC(10, 2)
  },
  dm_month: {
    type: DataTypes.INTEGER
  },
  dm_year: {
    type: DataTypes.INTEGER
  },
  dm_payroll_code: {
    type: DataTypes.STRING(2)
  },
  dm_account_no_2: {
    type: DataTypes.INTEGER
  },
  dm_account_no_3: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'ppis_description_master',
  timestamps: false,
  schema: 'ppis'
});

module.exports = Description;
