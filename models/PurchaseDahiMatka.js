import { Schema } from "mongoose";
import mongoose from "mongoose";

const purchasingDahiMatkaFrom = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const PurchsingDahiMatkaFromNameList = mongoose.model(
  "purchasingDahiMatkaName",
  purchasingDahiMatkaFrom
);

export default PurchsingDahiMatkaFromNameList;