import { Router } from "express";
import {
  milkPurchasingFromList,
  smpPurchasingFromList,
  polyfilmPurchasingFromList,
  woodenBlockPurchasingFromList,
  dieselGensetPurchasingFromList,
  dahiCupPurchasingFromList,
  dahiMatkaPurchasingFromList,
} from "../controller/Purchase.js";


const purchaseRouter = Router();

purchaseRouter.get("/milk", milkPurchasingFromList);
purchaseRouter.get("/smp", smpPurchasingFromList);
purchaseRouter.get("/polyfilm", polyfilmPurchasingFromList);
purchaseRouter.get("/wooden-block", woodenBlockPurchasingFromList);
purchaseRouter.get("/diesel-genset", dieselGensetPurchasingFromList);
purchaseRouter.get("/dahi-cup", dahiCupPurchasingFromList);
purchaseRouter.get("/dahi-matka", dahiMatkaPurchasingFromList);

export default purchaseRouter;
