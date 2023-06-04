import express from "express";
import {createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, uploadImages} from "../controllers/blogController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import { blogImgResize, uploadPhoto  } from "../middlewares/uploadImage.js";

const router = express.Router();

router.route("/").post(authMiddleware, isAdmin, createBlog);
router.route("/upload/:id").put(authMiddleware, isAdmin, uploadPhoto.array("images", 2), blogImgResize, uploadImages) 
router.route("/:id").put(authMiddleware, isAdmin, updateBlog);
router.route("/:id").get(getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

export default router;