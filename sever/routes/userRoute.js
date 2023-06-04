import express from "express";
import {registerUserCtrl, loginController,logoutController, getAllUser, getUserById, loginAdminCtrl} from "../controllers/userController.js";

//router object
const router = express.Router();

//routing
router.route('/register').post(registerUserCtrl);
router.route('/login').post(loginController);
router.route('/logout').post(logoutController);
router.route('/get-user').get(getUserById);
router.route('/login-admin').post(loginAdminCtrl);
router.route('/all-users').get(getAllUser);

export default router;