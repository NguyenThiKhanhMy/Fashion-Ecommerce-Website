import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../config/jwtToken.js";
import generateRefreshToken from "../config/jwtRefreshToken.js";

//Register 

export const registerUserCtrl = asyncHandler(async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "Đăng ký thành công",
    user,
    });
});

export const loginAdminCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  // check if user exists or not
  const findAdmin = await userModel.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateUser = await userModel.findByIdAndUpdate(
        findAdmin.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });
      res.json({
        _id: findAdmin?._id,
        username: findAdmin?.username,
        email: findAdmin?.email,
        token: generateToken(findAdmin?._id),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  });
  
// Login user
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

export const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
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
