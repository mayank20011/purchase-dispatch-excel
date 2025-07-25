import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingSmpFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingSmpFromNameList = mongoose.model(
  "purchasingSmpName",
  purchasingSmpFrom
);

export default PurchsingSmpFromNameList;