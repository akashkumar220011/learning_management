const Course = require("../models/Course");

exports.enrollCourse = async( req, res)=>{
    const { courseId} = req.body;
    const course = await Course.findById(courseId);
    if(!course) return res.status(404).json({message:"Course not found"});

    if(!course.students.includes(req.user.id)){
        course.students.push(req.user.id);
        await course.save();
    }
    res.json({ message: "Enrolled successfully"});
};

exports.myCourses = async (req, res)=>{
    const courses = await Course.find({ students: req.user.id}).populate("teacher");
    res.json(courses);
};