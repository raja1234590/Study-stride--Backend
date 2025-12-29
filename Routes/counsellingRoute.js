import express from "express";
import { submitCounselling } from "../controllers/Counsellingcontroller.js";

const router = express.Router();

router.post("/", submitCounselling);

export default router;
