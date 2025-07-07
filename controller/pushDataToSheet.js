import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const sendDataToSheet = async (req, res) => {
  const { Date, Volume, FAT, SNF, CLR, sheet } = req.body;
  if (!Date || !Volume || !FAT || !SNF || !CLR || !sheet) {
    return res.status(400).json({
      success: false,
      message: `All Fields are required`,
    });
  }
  try {
    const response = await axios.post(
      `${process.env.GOOGLE_SHEET_URL}`,
      { data: [{ Date, Volume, FAT, SNF, CLR }], sheet: sheet },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return res.status(201).json({
      success: true,
      message: "Created Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `${err.name}`,
    });
  }
};
