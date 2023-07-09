import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../config/jwtToken.js";
import generateRefreshToken from "../config/jwtRefreshToken.js";
import jwt from "jsonwebtoken";

//Register 
export const registerUserCtrl = asyncHandler(async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "Đăng ký thành công",
    user,
    });
});

//Login admin
export const loginAdminController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  // check if user exists or not
  const findAdmin = await userModel.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateuser = await userModel.findByIdAndUpdate(
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
      throw new Error("Thông tin không hợp lệ");
    }
  });
  
// Login user
export const loginController = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  // check if user exists or not
  const findUser = await userModel.findOne({ username });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateuser = await userModel.findByIdAndUpdate(
      findUser.id,
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
      _id: findUser?._id,
      username: findUser?.username,
      email: findUser?.email,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Thông tin không hợp lệ");
  }
});

// handle refresh token

export const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) throw new Error(" No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

//Log out
export const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }
  await userModel.findOneAndUpdate({ refreshToken: refreshToken });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // forbidden
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

// Get User By Id
export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const getUserById = await userModel.findById(id);
  if(!getUserById) {
    res.status(201).json({
      message: "Không tìm thấy người dùng phù hợp",
    }); 
  }
  res.status(200).json(getUserById);
});

// Delete User By Id
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteUserById = await userModel.findByIdAndDelete(id);
  if(!deleteUserById) {
    res.status(201).json({
      message: "Không tìm thấy người dùng phù hợp",
    }); 
  }
  res.status(200).json(deleteUserById);
});

// Update  User By Id
export const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      _id,
      {
        username: req?.body?.username,
        email: req?.body?.email,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

export const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("Không tìm thấy người dùng phù hợp");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

export const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await userModel.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error(" Token Expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

export const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  const user = await userModel.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});
