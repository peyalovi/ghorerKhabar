// ✅ secure cartController.js
import User from "../models/User.js";

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.userId; // ✅ get from middleware

    if (!userId) {
      return res.json({ success: false, message: "User not authenticated" });
    }

    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log("Cart update error:", error.message);
    res.json({ success: false, message: error.message });
  }
};
