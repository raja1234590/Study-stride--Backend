import mongoose from "mongoose";

const counsellingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  degree: String,
  email: String,
  phone: String,
  exam: String,
  day: String,
  time: String,
  comments: String,
  resume: String,
}, { timestamps: true });

export default mongoose.model("Counselling", counsellingSchema);
