const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Staff_one = sequelize.define(
  "Staff_one",
  {
    staff_dtl_mgr_code: {
      type: DataTypes.INTEGER,
    },
    staff_dtl_emp_comp_code: {
      type: DataTypes.INTEGER,
    },
    staff_dtl_emp_id: {
      type: DataTypes.STRING(5),
      primaryKey: true,
    },
    staff_dtl_emp_email: {
      type: DataTypes.STRING(50),
    },
    staff_dtl_dh_flag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    staff_dtl_saturday_half_flag: {
      type: DataTypes.STRING(1),
    },
  },
  {
    tableName: "ppis_staff_mst",
    timestamps: false,
    schema: "ppis",
  }
);

module.exports = Staff_one;
