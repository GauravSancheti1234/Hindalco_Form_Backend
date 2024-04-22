const express = require("express");
const router = express.Router();
const Department = require("../models/department");
const Staff_one = require("../models/staff");

const departmentMaster = async (req, res) => {
  try {
    const {
      dept_mr_dept_code,
      dept_mr_dept_short_desc,
      dept_mr_dept_desc,
      dept_mr_po_desc,
    } = req.body;
    if (!dept_mr_dept_code) {
      return res.status(400).json({ error: "dept_mr_dept_code is required" });
    }
    const department = await Department.create({
      dept_mr_dept_code,
      dept_mr_dept_short_desc,
      dept_mr_dept_desc,
      dept_mr_po_desc,
    });
    res.status(201).json(department);
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const StaffMasters_Code = async (req, res) => {
  try {
    let code;
    let name;

    if (req.params.code) {
      code = req.params.code;
    } else if (req.query.code) {
      code = req.query.code;
    } else if (req.body.code) {
      code = req.body.code;
    } else {
      return res.status(400).json({ error: "Code parameter is missing" });
    }

    if (req.query.name) {
      name = req.query.name;
    } else if (req.body.name) {
      name = req.body.name;
    }

    if (!code || !name) {
      return res
        .status(400)
        .json({ error: "Code parameter is missing or invalid" });
    }

    const staffDetails = await Staff_one.findOne({
      where: { staff_dtl_mgr_code: code },
      attributes: [
        "staff_dtl_emp_comp_code",
        "staff_dtl_mgr_code",
        "staff_dtl_emp_email",
        "staff_dtl_coff_flag",
        "staff_dtl_saturday_half_flag",
      ],
    });

    if (!staffDetails) {
      return res
        .status(404)
        .json({ error: "Staff not found for the provided manager code" });
    }

    res.status(200).json(staffDetails);
  } catch (error) {
    console.error("Error fetching staff details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { departmentMaster, StaffMasters_Code };
