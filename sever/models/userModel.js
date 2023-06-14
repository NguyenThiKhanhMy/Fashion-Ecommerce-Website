import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto"

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
      type: String,
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true
    },
    gender: {
      type: Boolean,
      default: true
    },
    refreshToken: {
      type: String,
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

userSchema.methods.createPasswordResetToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  //hash token and add to db
  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.passwordResetExpires = Date.now() + 15 * 60 * 1000; 
  return resetToken;
};

export default mongoose.model("users", userSchema);
