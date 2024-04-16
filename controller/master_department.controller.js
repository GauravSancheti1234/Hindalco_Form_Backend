const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const { models } = require('../models');
const { QueryTypes } = require('sequelize');


const PPIS_PF_DETAILS = require('../models/PPIS_PF_DETAILS');

const errorHandler = (res, error, status = 400) => {
  res.status(status).json({ msg: error.message });
}

const successHandler = (res, data) => {
  res.status(200).json(data);
}

const departmentMaster = async (req, res) => {
  try {
    const { dept_mr_dept_code, dept_mr_dept_short_desc, dept_mr_dept_desc, dept_mr_po_desc } = req.body;
    if (!dept_mr_dept_code) {
        return res.status(400).json({ error: 'dept_mr_dept_code is required' });
      }
    const department = await Department.create({ dept_mr_dept_code, dept_mr_dept_short_desc, dept_mr_dept_desc, dept_mr_po_desc });
    res.status(201).json(department);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const badgeNO = `
SELECT e.emp_mr_badge_no, e.emp_mr_emp_name, e.emp_mr_comp_code 
FROM ppis.ppis_employee_master e 
WHERE e.emp_mr_comp_code IN 
    (SELECT emp_mr_comp_code FROM ppis.ppis_employee_master 
     EXCEPT 
     SELECT pf_det_comp_code FROM ppis.ppis_pf_details);
`;
const badge = `
select emp_mr_badge_no,emp_mr_comp_code,emp_mr_emp_name from ppis.ppis_employee_master
`;
const PfContributaion = `
select pf_eps_pf_percent_code from ppis.ppis_pf_eps_pr order by 1
`;

const fetchbadge = async (req, res) => {
    try {
        const data = await models.sequelize.query(badgeNO, {
            type: QueryTypes.SELECT
        });

        successHandler(res, data);
    } catch (error) {
        errorHandler(res, error);
    }
};
const fetchBadgeNo = async (req, res) => {
    try {
        const data = await models.sequelize.query(badge, {
            type: QueryTypes.SELECT
        });

        successHandler(res, data);
    } catch (error) {
        errorHandler(res, error);
    }
};
const fetchPfContributaion = async (req, res) => {
    try {
        const data = await models.sequelize.query(PfContributaion, {
            type: QueryTypes.SELECT
        });

        successHandler(res, data);
    } catch (error) {
        errorHandler(res, error);
    }
};



const createPfDetails = async (req, res) => {
    try {
        const newDetail = await PPIS_PF_DETAILS.create(req.body);
        res.json(newDetail);
        res.status(201).json(newBadge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { departmentMaster,fetchbadge ,fetchPfContributaion, fetchBadgeNo, createPfDetails};

