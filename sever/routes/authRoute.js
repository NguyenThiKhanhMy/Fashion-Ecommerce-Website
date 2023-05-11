import express from "express";
import {registerController, loginController,logoutController, getAllUser, getUserById} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
router.route('/register').post(registerController);
router.route('/login').post(loginController);
router.route('/logout').post(logoutController);
router.route('/getalluser').get(getAllUser);
router.route('/getuserbyid').get(getUserById);



export default router;