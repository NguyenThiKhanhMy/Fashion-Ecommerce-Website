import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required:  [true, "Vui lòng nhập tên tài khoản"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Vui lòng nhập mật khẩu"],
      minLength: [6, "Mật khẩu có ít nhất 6 chữ số"],
    },
    email: {
        type: String,
        required: [true, "Vui lòng nhập Email"],
        unique: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
  
);

userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password,salt);
  next()
})

userSchema.methods.isPasswordMatched = async function(comparePassword) {
  return await bcrypt.compare(comparePassword, this.password);
}

export default mongoose.model("users", userSchema);
