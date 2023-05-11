import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../config/jwtToken.js";

//Register 
export const registerController = asyncHandler(async (req, res,next) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "Đăng ký thành công",
    user,
    });
});

// Login 
export const loginController = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if(!username || !password) {
    return res.status(404).json({
      success: false,
      message: "Vui lòng nhập tài khoản mật khẩu",
    });
  }
  const findUser =  await userModel.findOne({ username });
  if(!findUser || !(await findUser.isPasswordMatched(password))) {
    return res.status(404).json({
      success: false,
      message: "Tài khoản hoặc mật khẩu không đúng",
    });   
  }
  res.status(200).json({
    success: true,
    message: "Đăng nhập thành công",
    token: generateToken(findUser.id),
    findUser,
  }); 
});

//Log out
export const logoutController= asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
  });

  res.status(200).json({
      success: true,
      message: "Đăng xuất thành công",
  });
});

//Get All User
export const getAllUser = asyncHandler(async (req, res,next) => {
  const getAllUser = await userModel.find();
  if(!getAllUser) {
    res.status(201).json({
      message: "Hiện không có người dùng nào",
    }); 
  }
  res.status(200).json(getAllUser);
});

//Get User By Id
export const getUserById = asyncHandler(async (req, res,next) => {
  const { id } = req.body;
  const getUserById = await userModel.findById(id);
  if(!getUserById) {
    res.status(201).json({
      message: "Không tìm thấy người dùng phù hợp",
    }); 
  }
  res.status(200).json(getUserById);
});
