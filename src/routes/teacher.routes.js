const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const { createCourse } = require("../controllers/teacher.controller");

router.use(auth, role("teacher"));
router.post("/course", createCourse);

module.exports = router;