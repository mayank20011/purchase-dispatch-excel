import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

console.log(process.env.MONGO_URI)

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

export default connectDb;
