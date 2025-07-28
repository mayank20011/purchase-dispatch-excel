import mongoose from "mongoose";
import { Schema } from "mongoose";

const dispatchCustomerNames = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const DispatchNames = mongoose.model("DispatchName", dispatchCustomerNames);

export default DispatchNames;