import express from "express";
import {registerUserCtrl, loginController,handleRefreshToken, logout, getAllUser, getUser, loginAdminController, deleteUser,updateUser, forgotPasswordToken, resetPassword, updatePassword} from "../controllers/userController.js";
import {authMiddleware, isAdmin} from "../middlewares/authMiddleware.js"
//router object
const router = express.Router();

//routing
router.route('/register').post(registerUserCtrl);
router.route('/login').post(loginController);
router.route('/login-admin').post(loginAdminController);
router.route("/forgot-password-token").post(forgotPasswordToken);

router.route("/reset-password/:token").put(resetPassword);
router.route('/edit-user').put(authMiddleware, updateUser);
router.route("/password").put(authMiddleware, updatePassword);

router.route('/all-users').get(getAllUser);
router.route('/get-user/:id').get(authMiddleware,isAdmin, getUser);
router.route('/logout').get(logout);
router.route('/refresh').get(handleRefreshToken);

router.route('/:id').delete(deleteUser)



export default router;