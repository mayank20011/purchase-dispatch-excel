import { Router } from "express";
import {
  dispatchVardaandNameList,
  dispatchPushDataToSheet,
} from "../controller/dispatch.js";

const dispatchRouter = Router();

dispatchRouter.get("/get-names/vardaan", dispatchVardaandNameList);
dispatchRouter.post("/push-data-to-sheet", dispatchPushDataToSheet);

export default dispatchRouter;
