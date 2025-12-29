import Counselling from "../models/Counselling.js";
import { sendCounsellingAdminEmail } from "../utils/sendEmail.js";

export const submitCounselling = async (req, res) => {
  try {
    const counsellingData = {
      ...req.body,
      resume: req.file ? req.file.filename : null,
    };

    const newRequest = new Counselling(counsellingData);
    await newRequest.save();

    // ✅ Correct email function
    await sendCounsellingAdminEmail(counsellingData);

    res.status(201).json({
      message: "Counselling request submitted successfully",
    });
  } catch (error) {
    console.error("COUNSELLING ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
