import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        Title: {
            type: String,
            required:  [true, "Vui lòng nhập tiêu đề"],
            unique: true,
          },
          
        Content: {
            type: String,
            required:  [true, "Vui lòng nhập nội dung bài viết"],
          },
        Author: {
            type: String,
            required:  [true, "Vui lòng nhập tên tác giả"],
          },
    }
)