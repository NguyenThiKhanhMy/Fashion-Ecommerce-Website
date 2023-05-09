import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";

//Register 
export const registerController = asyncHandler(async (req, res,next) => {

    const user = await userModel.create(req.body);
    res.status(201).send({
      success: true,
      message: "Đăng ký thành công",
      user,
    });
  });

// Login 
export const loginController = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  find
});



  // export const registerController = async (req, res,next) => {
  //   // const { username, email, password } = req.body;

  //   //check duplicate username
  //   // const checkDuplicateUsername = await userModel.findOne({ username });
  //   // if (checkDuplicateUsername) {
  //   //   return res.status(500).send({
  //   //     success: false,
  //   //     message: "Tên đăng nhập đã được sử dụng, hãy chọn tên đăng nhập khác",
  //   //   });
  //   // }
  
  
  //   // //check duplicate email
  //   // const checkDuplicateEmail = await userModel.findOne({ email });
  //   // if (checkDuplicateEmail) {
  //   //   return res.status(200).send({
  //   //     success: false,
  //   //     message: "Email đã được đăng ký, hãy đăng nhập",
  //   //   });
  //   // }

  //   const user = await userModel.create(req.body);
  //   res.status(201).send({
  //     success: true,
  //     message: "Đăng ký thành công",
  //     user,
  //   });
  // } catch (error) {
  //   // console.log(error);
  //   // res.status(500).send({
  //   //   success: false,
  //   //   message: "Đăng ký không thành công",
  //   //   error,
  //   // });
  //   next(error);
  // }
  // });