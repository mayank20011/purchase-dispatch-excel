import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingDahiCupFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingDahiCupFromNameList = mongoose.model(
  "purchasingDahiCupName",
  purchasingDahiCupFrom
);

export default PurchsingDahiCupFromNameList;