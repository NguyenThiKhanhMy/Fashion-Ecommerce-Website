import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required:  [true, "Vui lòng nhập tiêu đề"],
        unique: true,
      },
      description: {
        type: String,
        required:  [true, "Vui lòng nhập mô tả bài viết"],
      },
      content: {
        type: String,
        required:  [true, "Vui lòng nhập nội dung bài viết"],
      },
      author: {
        type: String,
        default: "Admin",
      },
      category: {
        type: String,
        required: true,
      },
      images: [
      ],  
    },
    {
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
      timestamps: true,
    }
)
export default mongoose.model("blogs", blogSchema);