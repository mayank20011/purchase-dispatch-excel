import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  name: {
    trim: true,
    required: true,
    type: String,
  },
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
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password:{
    type:String,
    required:true,
    trim:true,
  },
  passwordResetOtp:{
    type:String,
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const User = mongoose.model("User",userSchema);
export default User;
