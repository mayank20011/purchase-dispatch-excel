import sellingTo from "../models/SellingTo.js";

export const getAllClients = async (req, res) => {
  try {
    const data = await sellingTo.find();
    return res.status(200).json({
      sucees: true,
      data: data,
      lenght: data.length,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.name,
    });
  }
};
