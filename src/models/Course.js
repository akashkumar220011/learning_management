const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: { type: String, requried: true},
        description: String,

        teacher:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    { timestamps: true}
);

module.exports = mongoose.model("Course", courseSchema);