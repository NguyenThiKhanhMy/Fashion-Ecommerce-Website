import express from "express";
import {registerController, loginController} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.route('/register').post(registerController);

//REGISTER || METHOD POST
router.route('/login').post(loginController);

export default router;