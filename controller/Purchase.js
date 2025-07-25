import PurchsingMilkFromNameList from "../models/PurchaseMilk.js";
import PurchsingSmpFromNameList from "../models/PurchaseSmp.js";
import PurchsingPolyFilmsFromNameList from "../models/PurchasePolyFilms.js";
import PurchsingWoodenBlockFromNameList from "../models/PurchaseWoodenBlock.js";
import PurchsingDieselGensetFromNameList from "../models/PurchaseDieselGenset.js";
import PurchsingDahiCupFromNameList from "../models/PurchaseDahiCup.js";
import PurchsingDahiMatkaFromNameList from "../models/PurchaseDahiMatka.js";
import { pushDataToGoogleSheet } from "../config/pushDataToGoogleSheet.js";
import dotenv from "dotenv";

dotenv.config({ path: "config/.env" });

// for getting names
export const milkPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingMilkFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

export const smpPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingSmpFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

export const polyfilmPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingPolyFilmsFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

export const woodenBlockPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingWoodenBlockFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

export const dieselGensetPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingDieselGensetFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

export const dahiCupPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingDahiCupFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

export const dahiMatkaPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingDahiMatkaFromNameList.find({}, { _id: 0 });
    res.status(201).json({
      success: true,
      data: list,
      length: list.length,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};

// for pusshing data to sheet
export const MilkPushDataToSheet = async (req, res) => {
  const {
    PurchasingFrom,
    MilkType,
    SerialNumber,
    VechileNumber,
    DriverName,
    Date,
    Time,
    Adulteration,
  } = req.body;

  if (
    !PurchasingFrom ||
    !MilkType ||
    !SerialNumber ||
    !VechileNumber ||
    !DriverName ||
    !Date ||
    !Time ||
    !Adulteration
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (Adulteration == "Yes") {
    const { Clr, Fat, Snf, Volume } = req.body;
    if (!Clr || !Fat || !Snf || !Volume) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    } else {
      await pushDataToGoogleSheet(
        process.env.MILK_PURCHASE_SHEET_URL,
        {
          MilkType,
          SerialNumber,
          VechileNumber,
          DriverName,
          Date,
          Time,
          Adulteration,
          Clr,
          Fat,
          Snf,
          Volume,
        },
        PurchasingFrom,
        res,
        process.env.MILK_PURCHASE_SHEET_BARER_TOKKEN
      );
    }
  } else {
    await pushDataToGoogleSheet(
      process.env.MILK_PURCHASE_SHEET_URL,
      {
        MilkType,
        SerialNumber,
        VechileNumber,
        DriverName,
        Date,
        Time,
        Adulteration,
      },
      PurchasingFrom,
      res,
      process.env.MILK_PURCHASE_SHEET_BARER_TOKKEN
    );
  }
};

export const SmpPushDataToSheet = (req, res) => {
  const { Date, NumberOfBags, PurchasingFrom, Remark, Time } = req.body;
  if (!Date || !NumberOfBags || !PurchasingFrom || !Remark || !Time) {
    return res.status(400).json({
      success: false,
      message: "All Fields Are Required",
    });
  } else {
    pushDataToGoogleSheet();
  }
};

export const PolyFilmPushDataToSheet = (req, res) => {};
export const WoodenBlockPushDataToSheet = (req, res) => {};
export const DieselGensetPushDataToSheet = (req, res) => {};
export const DahiCupPushDataToSheet = (req, res) => {};
export const DahiMatkaPushDataToSheet = (req, res) => {};
