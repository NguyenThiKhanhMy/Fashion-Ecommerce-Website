import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required:  [true, "Vui lòng nhập tiêu đề"],
        unique: true,
      },
          
      content: {
        type: String,
        required:  [true, "Vui lòng nhập nội dung bài viết"],
      },
      author: {
        type: String,
        required:  [true, "Vui lòng nhập tên tác giả"],
      },
      date: {
        type: Date,
        required:  [true, "Vui lòng nhập tên tác giả"],
      },
    }
)