import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

export const authMiddleware = asyncHandler(async(req, res,next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
        try {
            if(token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await userModel.findById(decoded?.id);
                req.user = user;
                next();
                // console.log(decoded)
            }
        } catch (error) {
            throw new Error("Authorized token đã hết hạn. Vui lòng đăng nhập lại")
        }
    } else {
        throw new Error("Không có Authorized token");
    }
})

export const isAdmin = asyncHandler(async(req, res,next) => {
    const {email} = req.user;
    const adminUser = await userModel.findOne({email});
    if(adminUser.role !== "admin") {
        throw new Error("Bạn không phải admin");
    } else {
        next();
    }

})