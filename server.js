// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import chatRoute from "./Routes/chatRoute.js";
import authRoute from "./Routes/authRoute.js";

const app = express();


app.use(cors({
  origin: "*", 
}));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/chat", chatRoute);


if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Error:", err));
}


export default app;
