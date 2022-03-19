import express from "express";
const router = express.Router();

import { example } from "../controller/example.controller.js";

router.get("/:id", example);

export default router;
