import PurchsingMilkFromNameList from "../models/PurchaseMilk.js";
import PurchsingSmpFromNameList from "../models/PurchaseSmp.js";
import PurchsingPolyFilmsFromNameList from "../models/PurchasePolyFilms.js";
import PurchsingWoodenBlockFromNameList from "../models/PurchaseWoodenBlock.js";
import PurchsingDieselGensetFromNameList from "../models/PurchaseDieselGenset.js";
import PurchsingDahiCupFromNameList from "../models/PurchaseDahiCup.js";
import PurchsingDahiMatkaFromNameList from "../models/PurchaseDahiMatka.js";

export const milkPurchasingFromList = async (req, res) => {
  try {
    const list = await PurchsingMilkFromNameList.find({},{_id:0});
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
    const list = await PurchsingSmpFromNameList.find({},{_id:0});
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
    const list = await PurchsingPolyFilmsFromNameList.find({},{_id:0});
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
    const list = await PurchsingWoodenBlockFromNameList.find({},{_id:0});
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
    const list = await PurchsingDieselGensetFromNameList.find({},{_id:0});
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
    const list = await PurchsingDahiCupFromNameList.find({},{_id:0});
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
    const list = await PurchsingDahiMatkaFromNameList.find({},{_id:0});
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
