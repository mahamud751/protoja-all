import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
  },

  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
