
const { DataTypes } = require('sequelize'); 

const sequelize = require("../config/db");

const PPIS_PF_DETAILS = sequelize.define('PPIS_PF_DETAILS', {

        pf_det_comp_code: DataTypes.INTEGER,
        pf_det_pf_ac_no: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        pf_det_pf_contribution: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pf_det_eps_status: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        pf_det_eps_ac_no: DataTypes.STRING(18),
        pf_det_pf_join_date: DataTypes.DATE,
        pf_det_nominee_name: DataTypes.STRING(30),
        pf_det_relationship: DataTypes.STRING(10),
        pf_det_add1: DataTypes.STRING(30),
        pf_det_add2: DataTypes.STRING(30),
        pf_det_add3: DataTypes.STRING(30),
        pf_det_add4: DataTypes.STRING(30),
        pf_det_op_bal_empe_cont: DataTypes.DECIMAL(6, 2),
        pf_det_op_bal_empr_cont: DataTypes.DECIMAL(6, 2),
        pf_det_op_bal_empe_intr: DataTypes.DECIMAL(6, 2),
        pf_det_op_bal_empr_intr: DataTypes.DECIMAL(6, 2),
        pf_det_nominee_dob: DataTypes.DATE,
        pf_uan_no: DataTypes.DECIMAL(12, 0)
    }, {
    tableName: 'ppis_pf_details', 
    timestamps: false,
    schema: 'ppis'
});

module.exports = PPIS_PF_DETAILS;
