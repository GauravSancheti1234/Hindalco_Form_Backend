const express = require('express');
const router = express.Router();
const Department = require('../models/department');

const DesignationMaster = async (req, res) => {
  try {
    const designations = await Department.findAll();

    res.status(200).json(designations);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { DesignationMaster };

