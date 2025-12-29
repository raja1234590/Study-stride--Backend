import express from "express";
import { submitCounselling } from "../controllers/Counsellingcontroller.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("resume"), submitCounselling);

export default router;
