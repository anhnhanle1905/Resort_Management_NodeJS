import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./src/db/mongoose.js";

const port = process.env.PORT || 3000;
//test
//xu ly form-data
// const multer = require("multer");
// const upload = multer();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());
import example from "./src/routers/example.routers.js";
import { registerUser } from "./src/controller/auth.controller.js";

// app.use("/example", MIDDLEWARE, example);
app.use("/ok", example);
app.use("/auth", registerUser);
//db connect()
connectDB();

app.listen(port, () =>
  console.log(`Resort managemnt app listening on port ${port}!`)
);
