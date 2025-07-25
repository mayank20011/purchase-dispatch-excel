import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingDieselGensetFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingDieselGensetFromNameList = mongoose.model(
  "purchasingDieselGensetName",
  purchasingDieselGensetFrom
);

export default PurchsingDieselGensetFromNameList;