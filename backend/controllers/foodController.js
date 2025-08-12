import { v2 as cloudinary } from "cloudinary"
import Food from "../models/Food.js"

// Add Food : /api/food/add
export const addFood = async (req, res) => {
  try {
    let foodData = JSON.parse(req.body.foodData)

    const images = req.files

    let imagesURL = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url
      })
    )


    foodData.chef = req.userId; // 👈 attach chef ID
    await Food.create({ ...foodData, image: imagesURL });


    res.json({ success: true, message: "Food Added" })

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message })
  }
};

// Get Food : /api/food/list
export const foodList = async (req, res) => {
  try {
    console.log("✅ foodList called by chef:", req.userId);  // <-- log this!
    const foods = await Food.find({ chef: req.userId });
    res.json({ success: true, foods });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get All Food : /api/food/all — no auth required - chatgpt
export const allFoods = async (req, res) => {
  try {
    const foods = await Food.find({ inStock: true });  // optional: only show in-stock items
    res.json({ success: true, foods });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// Get single Food : /api/food/id
export const foodById = async (req, res) => {
  try {
    const { id } = req.body
    const food = await Food.findById(id)
    res.json({ success: true, food })
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message })
  }
}

// Change Food inStock : /api/food/stock
export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body
    await Food.findByIdAndUpdate(id, { inStock })
    res.json({ success: true, message: "Stock Updated" })
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message })
  }
};