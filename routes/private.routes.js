const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const masterController = require('../controller/master_department.controller');

router.post("/departments", masterController.departmentMaster);

module.exports = router;
