const User = require("../models/User");
const Course = require("../models/Course");

exports.getStudents = async (req, res)=>{
    const students = await User.find({ role: "student"});
    res.json(students);
};

exports.getTeachers = async (req,res)=>{
    const teachers = await User.find({ role: "teacher"});
    res.json(teachers);
};

exports.getCourses = async (req, res)=>{
    const courses = await Course.find().populate("teacher students");
    res.json(courses);
};