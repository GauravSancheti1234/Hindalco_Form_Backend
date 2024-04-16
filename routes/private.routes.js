const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const masterController = require('../controller/master_department.controller');

router.get("/designation", masterController.DesignationMaster)



module.exports = router;

