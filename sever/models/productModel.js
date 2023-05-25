import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:  [true, "Vui lòng nhập tên sản phẩm"],
            unique: true,
          },
          
        describe: {
            type: String,
            required:  [true, "Vui lòng nhập mô tả sản phẩm"],
          },
        quantity: {
            type: Number,
            required:  [true, "Vui lòng nhập mô tả sản phẩm"],
          },
        price: {
            type: Number,
            required: [true, "Please enter product price"]
        },
        images: [
            {
                public_id: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true
              }
          }
        ],
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            default: null
        },
        isActive: {
            type: Boolean,
            default: true
        },
    }
)