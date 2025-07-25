import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingPolyFilmsFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingPolyFilmsFromNameList = mongoose.model(
  "purchasingPolyFilmsName",
  purchasingPolyFilmsFrom
);

export default PurchsingPolyFilmsFromNameList;