import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: Array, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },

  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chef",
    required: true,
  }
}, { timestamps: true })

const Food = mongoose.models.food || mongoose.model('food', foodSchema)

export default Food