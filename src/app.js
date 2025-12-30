require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/admin",require("./routes/admin.routes"));
app.use("/api/teacher", require("./routes/teacher.routes"));
app.use("/api/student", require("./routes/student.routes"));




module.exports= app;