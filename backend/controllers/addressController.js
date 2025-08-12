import Address from "../models/Address.js"


// Add Address : /api/address/add\
export const addAddress = async (req, res) => {
  try {
    const userId = req.userId;  // from auth middleware
    const { firstName, lastName, email, street, city, zipcode, phone } = req.body;

    if (!firstName || !lastName || !email || !street || !city || !zipcode || !phone) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    await Address.create({
      userId,
      firstName,
      lastName,
      email,
      street,
      city,
      zipcode,
      phone,
    });

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId;  // from middleware
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}