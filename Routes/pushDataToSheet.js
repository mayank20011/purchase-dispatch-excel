import { Router } from "express";
import { sendDataToSheet } from "../controller/pushDataToSheet.js";

const sheetRouter = Router();

sheetRouter.post("/",sendDataToSheet);

export default sheetRouter;