import { Schema } from "mongoose";
import mongoose from "mongoose";

const whiteListSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (v) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
});
const whiteList = mongoose.model("whitelist", whiteListSchema);
export default whiteList;
