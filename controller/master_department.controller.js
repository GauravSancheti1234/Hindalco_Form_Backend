const express = require('express');
const router = express.Router();
const Department = require('../models/department');


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


module.exports = { departmentMaster };

