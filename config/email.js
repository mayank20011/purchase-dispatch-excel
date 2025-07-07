import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({path:"./config/.env"});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (receiversEmail, message)=>{
   await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to:receiversEmail,
    subject:"GFO Reset Password OTP",
    text:message,
   })
};