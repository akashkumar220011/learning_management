const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {enrollCourse, myCourses,} = require("../controllers/student.controller");


router.use(auth, role("student"));

router.post("/enroll", enrollCourse);
router.get("/courses",myCourses);

module.exports = router;