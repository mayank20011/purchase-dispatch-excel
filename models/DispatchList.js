import mongoose from "mongoose";
import { Schema } from "mongoose";

const dispatchVardaanCustomerNames = new Schema({
  name: {
    type: {
      trim: true,
      required: true,
      type: String,
    },
  },
});

const DispatchVardaanNames = mongoose.model(
  "dispatchname",
  dispatchVardaanCustomerNames
);

export default DispatchVardaanNames;
