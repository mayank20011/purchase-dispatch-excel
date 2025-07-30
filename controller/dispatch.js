import DispatchVardaanNames from "../models/DispatchList.js";
import { pushDataToGoogleSheet } from "../config/pushDataToGoogleSheet.js";

// for getting all names
export const dispatchVardaandNameList = async (req, res) => {
  try {
    const list = await DispatchVardaanNames.find({});
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

// for pushing all data
export const dispatchPushDataToSheet = async (req, res) => {
  const {
    Company,
    Date,
    DispatchTo,
    DriverName,
    VechileNumber,
    Time,
    Creates,
    _id,
    ...products
  } = req.body;
  console.log(req.body)
  if (
    !products ||
    !Date ||
    !Time ||
    !Company ||
    !DispatchTo ||
    !DriverName ||
    !VechileNumber ||
    !Creates ||
    !_id
  ) {
    return res.status(400).json({
      success: false,
      message: "All Fields Are Required",
    });
  } else {
    await pushDataToGoogleSheet(
      process.env.DISPATCH_SHEET_URL,
      {
        Date,
        Time,
        DispatchTo,
        DriverName,
        VechileNumber,
        Creates,
        _id,
        ...products,
      },
      Company,
      res,
      process.env.DISPATCH_SHEET_BARER_TOKEN
    );
  }
};
