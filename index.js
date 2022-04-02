import cookieParser from "cookie-parser";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./src/db/mongoose.js";

const port = process.env.PORT || 3000;
//test
//xu ly form-data
// const multer = require("multer");
// const upload = multer();

const app = express();

app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(upload.array());
import auth from "./src/routers/auth.routers.js";

app.use("/auth", auth);
//db connect()
connectDB();

app.listen(port, () =>
  console.log(`Resort managemnt app listening on port ${port}!`)
);
