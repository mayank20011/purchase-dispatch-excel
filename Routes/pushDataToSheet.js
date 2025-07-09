import { Router } from "express";
import { sendDataToSheet, sendDataToDispatchSheet } from "../controller/pushDataToSheet.js";

const sheetRouter = Router();

// for purchase sheet
sheetRouter.post("/",sendDataToSheet);
// for dispatch sheet
sheetRouter.post("/dispatch-sheet",sendDataToDispatchSheet);

export default sheetRouter;