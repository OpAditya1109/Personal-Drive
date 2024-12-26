const express = require("express");
const app = express();
const userRouter = require("./Routes/user.routes");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser");
dotenv.config();
connectToDB();
const indexRouter = require("./Routes/index.routes");
const multer = require("multer");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/user", userRouter); //it is use to routes from another files

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
