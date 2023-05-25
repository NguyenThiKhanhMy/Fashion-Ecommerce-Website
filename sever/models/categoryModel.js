import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
            trim: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
    }
)