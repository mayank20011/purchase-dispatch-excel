import { pushDataToGoogleSheet } from "../config/pushDataToGoogleSheet.js";

export const PushCreatesDataToSheet = async (req, res) => {
  const { name, Date, createsInward, _id } = req.body;
  if (!Date || !name || !createsInward || !_id) {
    return res.status(400).json({
      success: false,
      message: "All Fields Are Required",
    });
  } else {
    await pushDataToGoogleSheet(
      process.env.DISPATCH_SHEET_URL,
      {
        Date,
        name,
        createsInward,
        _id,
      },
      "Creates Inward",
      res,
      process.env.DISPATCH_SHEET_BARER_TOKEN
    );
  }
};
