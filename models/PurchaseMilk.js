import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingMilkFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingMilkFromNameList = mongoose.model(
  "purchasingMilkName",
  purchasingMilkFrom
);

export default PurchsingMilkFromNameList;
