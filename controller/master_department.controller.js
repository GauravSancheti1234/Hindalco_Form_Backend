const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const Description = require('../models/decripition');

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


const descriptionMaster = async (req, res) => {
  try {
    let data = req.body;
    if (!Array.isArray(data)) {
      data = [data];
    }

    for (let i = 0; i < data.length; i++) {
      const {
        dm_field_name,
        dm_field_descr,
        dm_earn_dedn_type,
        dm_sequence_no,
        dm_account_no,
        dm_shoporder_no,
        dm_amount,
        dm_month,
        dm_account_no_3,
        dm_year,
        dm_payroll_code,
        dm_account_no_2
      } = data[i];

      if (!dm_field_name || !dm_field_descr || !dm_earn_dedn_type || !dm_sequence_no) {
        return res.status(400).json({ error: 'All required fields must be provided', body: data[i] });
      }

      await Description.create({
        dm_field_name,
        dm_field_descr,
        dm_earn_dedn_type,
        dm_sequence_no,
        dm_account_no: dm_account_no || null, 
        dm_shoporder_no: dm_shoporder_no || null, 
        dm_amount: dm_amount || null, 
        dm_month: dm_month || null, 
        dm_account_no_3: dm_account_no_3 || null, 
        dm_year: dm_year || null, 
        dm_payroll_code: dm_payroll_code || null, 
        dm_account_no_2: dm_account_no_2 || null 
      });
    }

    res.status(201).json({ msg: 'Data created successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);

    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map(err => err.message);
      return res.status(400).json({ error: 'Validation failed', details: validationErrors });
    }

    if (error.name === 'SequelizeDatabaseError') {
      return res.status(500).json({ error: 'Database error', details: error.message });
    }

    res.status(500).json({ error: 'Duplicate entry or other server error' });
  }
};

module.exports = { descriptionMaster ,departmentMaster };

