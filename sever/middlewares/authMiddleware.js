import userModel from "../models/userModel.js";
import jwt from "../config/jwtToken.js";
import asyncHandler from "express-async-handler";

export const authMiddleware = asyncHandler(async(req, res,next) => {
    let token;
    if(req?.headers?.authorization?.startWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if(token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await userModel.findById(decoded?.id);
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token expired.Please login again")
        }
    } else {
        throw new Error("There is no token attached to header");
    }
})

export const isAdmin = asyncHandler(async(req, res,next) => {
    const {email} = req.userModel;
    const adminUser = await userModel.findOne({email});
    if(adminUser.role !== "admin") {
        throw new Error("You are not admin");
    } else {
        next();
    }

})