import dotenv from "dotenv";
 dotenv.config(); 
 import express from "express"; 
 import mongoose from "mongoose"; 
 import cors from "cors"; 
 import chatRoute from "./Routes/chatRoute.js"; 
 import authRoute from "./Routes/authRoute.js"; 
 import counsellingRoute from "./Routes/counsellingRoute.js"; 
 const app = express(); 
 const PORT = 5000;

 app.use(cors({ origin: "*", })); 
 app.use(express.json()); 
 app.use("/api/auth", authRoute); 
 app.use("/api/chat", chatRoute); 
 app.use("/api/counselling", counsellingRoute); 
 if (!mongoose.connection.readyState) 
  { mongoose .connect(process.env.MONGO_URI) .then(() => 
    console.log("MongoDB Connected")) .
    catch((err) => console.error("MongoDB Error:", err)); } 
    
  app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



    export default app;