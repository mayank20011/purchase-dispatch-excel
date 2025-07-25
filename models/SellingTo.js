import mongoose from "mongoose";
import { Schema } from "mongoose";

const sellingToClients = new Schema({
  name: {
    type: String,
    required: true,
    minLenght: 4,
  },
});

const sellingTo = mongoose.model("sellingTo", sellingToClients);

export default sellingTo;
