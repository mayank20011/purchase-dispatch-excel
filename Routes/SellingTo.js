import { Router } from "express";
import { getAllClients } from "../controller/SellingTo.js";



const SellingRouter = Router();

SellingRouter.get("/",getAllClients);

export default SellingRouter;
