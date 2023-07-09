import express from "express";
import {addToWishlist} from "../controllers/wishlistController.js";

const router = express.Router();

router.put('/', addToWishlist);

export default router;