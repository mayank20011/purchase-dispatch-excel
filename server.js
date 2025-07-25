import express from "express";
import dotenv from "dotenv";
import userRouter from "./Routes/user.js";
import connectDb from "./config/db.js";
import cors from "cors";
import sheetRouter from "./Routes/pushDataToSheet.js";
import { verifyToken } from "./middleware/tokkenChecking.js";
import SellingRouter from "./Routes/SellingTo.js";
import purchaseRouter from "./Routes/purchaseRouter.js";

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 3000;

const server = express();

// middleware
server.use(express.json());
server.use(cors());

// routes setup
server.use(`/api/v1/user/`, userRouter);
server.use(`/api/v1/purchase`, verifyToken ,purchaseRouter);
server.use(`/api/v1/sendDataToSheet`, verifyToken ,sheetRouter);
server.use(`/api/v1/sellingTo`, SellingRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello",
  }); 
});
 
connectDb()
  .then(() => {
    console.log(`Db Connected Successfully`);
    server.listen(PORT, () => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
 