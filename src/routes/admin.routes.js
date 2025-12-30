const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");


const { getStudents, getTeachers, getCourses} = require("../controllers/admin.controller");

router.use(auth, role("admin"));
router.get("/students", getStudents);
router.get("/teachers", getTeachers);
router.get("/courses", getCourses);

module.exports = router;