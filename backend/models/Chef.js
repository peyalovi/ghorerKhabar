import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { minimize: false });

const Chef = mongoose.models.chef || mongoose.model('chef', chefSchema);

export default Chef;
