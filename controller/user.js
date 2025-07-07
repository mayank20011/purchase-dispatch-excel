import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { sendEmail } from "../config/email.js";

dotenv.config({ path: "./config/.env" });

// for vardaan only emails
function emailFromVardaanFarms(email) {
  const emailendPoint = email.split("@")[1];
  if (emailendPoint == "vardaanfarms.com") {
    return true;
  }
  return false;
}

// for jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// controller functions
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  // checking if all fields are there or not
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, Email and password are requiredd Fields",
    });
  }
  // checking password lenght
  if (password.trim().length < 6) {
    return res.status(400).json({
      success: false,
      messae: `Password must be greater then 6 characters`,
    });
  }

  // to check if email is from vardaanfarms or not
  if (!emailFromVardaanFarms(email)) {
    return res.status(403).json({
      success: false,
      message: "Can't make account for you",
    });
  }

  try {
    // generating salt and hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    await User.create({ name, email, password: hash });
    return res.status(201).json({
      success: true,
      message: "Created Successfully",
    });
  } catch (err) {
    console.log(err);
    let errMessage = "Server Problem";
    let statusCode = 500;
    if ((err.code = 11000)) {
      errMessage = "email already exists";
      statusCode = 409;
    }
    return res.status(statusCode).json({
      success: false,
      message: errMessage,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email & Pass both required",
    });
  }
  if (password.trim().length < 6) {
    return res.status(400).json({
      success: false,
      message: "Pass Must be greater then 6 char",
    });
  }

  try {
    const confirmation = await User.findOne({ email });
    if (!confirmation) {
      return res.status(404).json({
        success: false,
        message: `Email not registered`,
      });
    } else {
      if (bcrypt.compareSync(password, confirmation.password)) {
        return res.status(200).json({
          success: true,
          message: "login successfull",
          token: generateToken(confirmation._id),
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Wrong Password",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const sendOtp = async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  if (!email) {
    return res.status(400).json({
      success: false,
      message: `email is required`,
    });
  }
  const confirmation = await User.findOne({ email });
  if (!confirmation) {
    return res.status(404).json({
      sucess: false,
      message: "Not a Registered Email",
    });
  } else {
    let otp = Math.floor(1000 + Math.random() * 9000);
    confirmation.passwordResetOtp = otp;
    confirmation.save();
    try {
      await sendEmail(
        confirmation.email,
        `OTP For reseting your password is : ${otp}`
      );
      res.status(200).json({
        success: true,
        message: "OTP Sent successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Error Sending email",
      });
    }
  }
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({
      success: false,
      message: "Email, Otp both required",
    });
  }
  const confirmation = await User.findOne({ email });
  if (!confirmation) {
    return res.status(404).json({
      success: false,
      message: "NO Such Email",
    });
  }
  if (confirmation.passwordResetOtp == otp) {
    return res.status(200).json({ succes: true });
  } else {
    return res.status(400).json({ success: false, message: "Wrong OTP" });
  }
};

export const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email, Password both required",
    });
  }
  const confirmation = await User.findOne({ email });
  if (!confirmation) {
    return res.status(404).json({
      success: false,
      message: "NO Such Email",
    });
  }
  try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);
    confirmation.password = hash;
    confirmation.passwordResetOtp = "";
    confirmation.save();
    return res.status(200).json({
      success:true,
    })
  }
  catch (err){
      return res.status(500).json({
        success:false,
        message:err.message,
      })
  }
};
