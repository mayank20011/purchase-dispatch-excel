import { Router } from "express";
import {
  milkPurchasingFromList,
  smpPurchasingFromList,
  polyfilmPurchasingFromList,
  woodenBlockPurchasingFromList,
  dieselGensetPurchasingFromList,
  dahiCupPurchasingFromList,
  dahiMatkaPurchasingFromList,
  MilkPushDataToSheet,
  SmpPushDataToSheet,
  PolyFilmPushDataToSheet,
  WoodenBlockPushDataToSheet,
  DieselGensetPushDataToSheet,
  DahiCupPushDataToSheet,
  DahiMatkaPushDataToSheet,
} from "../controller/Purchase.js";


const purchaseRouter = Router();

purchaseRouter.get("/milk", milkPurchasingFromList);
purchaseRouter.post("/milk/push-data-to-sheet", MilkPushDataToSheet);

purchaseRouter.get("/smp", smpPurchasingFromList);
purchaseRouter.post("/smp/push-data-to-sheet", SmpPushDataToSheet);

purchaseRouter.get("/polyfilm", polyfilmPurchasingFromList);
purchaseRouter.post("/polyfilm/push-data-to-sheet", PolyFilmPushDataToSheet);

purchaseRouter.get("/wooden-block", woodenBlockPurchasingFromList);
purchaseRouter.post("/wooden-block/push-data-to-sheet", WoodenBlockPushDataToSheet);

purchaseRouter.get("/diesel-genset", dieselGensetPurchasingFromList);
purchaseRouter.post("/diesel-genset/push-data-to-sheet", DieselGensetPushDataToSheet);

purchaseRouter.get("/dahi-cup", dahiCupPurchasingFromList);
purchaseRouter.post("/dahi-cup/push-data-to-sheet", DahiCupPushDataToSheet);

purchaseRouter.get("/dahi-matka", dahiMatkaPurchasingFromList);
purchaseRouter.post("/dahi-matka/push-data-to-sheet", DahiMatkaPushDataToSheet);

export default purchaseRouter;
