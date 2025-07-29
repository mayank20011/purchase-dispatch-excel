import { Router } from "express";
import { PushCreatesDataToSheet } from "../controller/creates.js";

const createsRouter = Router();

createsRouter.post("/push-data-to-sheet", PushCreatesDataToSheet);

export default createsRouter;
