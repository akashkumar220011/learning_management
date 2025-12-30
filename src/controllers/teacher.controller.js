const Course = require("../models/Course");

exports.createCourse = async (req, res) =>{
    const { title, description } = req.body;

    const course = await Course.create({
        title,
        description,
        teacher: req.user.id,
    });

    res.send(201).json(course);
};