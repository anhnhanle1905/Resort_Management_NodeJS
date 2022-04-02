import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  changePw,
} from "../controller/auth.controller.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/changePw", changePw);

export default router;
