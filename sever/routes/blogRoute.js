import express from "express";
import {createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, uploadImages} from "../controllers/blogController.js";
import { blogImgResize, uploadPhoto  } from "../middlewares/uploadImage.js";
import {authMiddleware, isAdmin} from "../middlewares/authMiddleware.js"

const router = express.Router();

router.route("/").post(createBlog);
router.route("/upload/:id").put( uploadPhoto.array("images", 2), blogImgResize, uploadImages) 
router.route("/:id").put(updateBlog);
router.route("/:id").get(getBlog);
router.get("/", getAllBlogs);
router.delete("/:id",deleteBlog);

export default router;