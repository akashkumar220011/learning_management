require("dotenv").config();
const app = require("./src/app");
const connectDb = require("./src/config/db")


connectDb();

app.listen(5000, ()=> console.log("server running on port 5000"));