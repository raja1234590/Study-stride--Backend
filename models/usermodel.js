const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  resetOTP: String,
  resetOTPExpiry: Date,

  },
  { timestamps: true } // ✅ adds createdAt & updatedAt automatically
);

module.exports = mongoose.model("User", UserSchema);
