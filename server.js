import express from "express";
import dotenv from "dotenv";
import userRouter from "./Routes/user.js";
import connectDb from "./config/db.js";
import cors from "cors";
import { verifyToken } from "./middleware/tokkenChecking.js";
import purchaseRouter from "./Routes/purchaseRouter.js";
import dispatchRouter from "./Routes/dispatchRouter.js";
import createsRouter from "./Routes/createsRouter.js";

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 3000;

const server = express();

// middleware
server.use(express.json());
server.use(cors());

// routes setup
server.use(`/api/v1/user/`, userRouter);
server.use(`/api/v1/purchase`, verifyToken ,purchaseRouter);
server.use(`/api/v1/dispatch`, verifyToken, dispatchRouter);
server.use(`/api/v1/creates`, verifyToken, createsRouter);

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
 