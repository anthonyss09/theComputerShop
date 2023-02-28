import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  model: {
    type: String,
    required: [true, "Please provide product name."],
  },
  image: {
    type: String,
  },
  manufactuer: {
    type: String,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
  },
  count: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Product", ProductSchema);
