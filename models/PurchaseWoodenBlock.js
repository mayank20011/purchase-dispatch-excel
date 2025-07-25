import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingWoodenBlockFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingWoodenBlockFromNameList = mongoose.model(
  "purchasingWoodenBlockName",
  purchasingWoodenBlockFrom
);

export default PurchsingWoodenBlockFromNameList;