import { Router } from "express";
import {
  dispatchNameList,
  dispatchPushDataToSheet,
} from "../controller/dispatch.js";

const dispatchRouter = Router();

dispatchRouter.get("/get-names", dispatchNameList);
dispatchRouter.post("/push-data-to-sheet", dispatchPushDataToSheet);

export default dispatchRouter;
