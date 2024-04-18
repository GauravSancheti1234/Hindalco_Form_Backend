const express = require('express');
const router = express.Router();

const  masterController = require('../controller/master_department.controller');

router.post("/departments", masterController.departmentMaster);

module.exports = router;

