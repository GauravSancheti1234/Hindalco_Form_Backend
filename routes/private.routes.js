const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const masterController = require('../controller/master_department.controller');

router.post("/departments", masterController.departmentMaster);

router.get("/badgeno", masterController.fetchBadgeNo);
router.get("/badge", masterController.fetchbadge);
router.get("/pfContributaion", masterController.fetchPfContributaion);


// router.post("/pfdetails", masterController.createPfDetails);

module.exports = router;

