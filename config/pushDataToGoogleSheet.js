import axios from "axios";
export const pushDataToGoogleSheet = async (
  sheetUrl,
  dataToPush,
  sheetName,
  res,
  tokken
) => {
  try {
    await axios.post(
      `${sheetUrl}`,
      { data: [dataToPush], sheet: sheetName },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${tokken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.status(201).json({
      success: true,
      message: "Created Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: `${err.name}`,
    });
  }
};
