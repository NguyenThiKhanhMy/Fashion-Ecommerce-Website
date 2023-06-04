import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required:  [true, "Vui lòng nhập tiêu đề"],
        unique: true,
      },
      describe: {
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
      date: {
        type: Date,
        required: true,
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
    }
)
export default mongoose.model("blogs", blogSchema);