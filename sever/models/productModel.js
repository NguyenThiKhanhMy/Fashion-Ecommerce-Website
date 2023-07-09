import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên sản phẩm"],
      unique: true,
    },
    describe: {
      type: String,
      required: [true, "Vui lòng nhập mô tả sản phẩm"],
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
      required: [true, "Vui lòng nhập giá sản phẩm"],
    },
    images: [],
    size: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("products", productSchema);