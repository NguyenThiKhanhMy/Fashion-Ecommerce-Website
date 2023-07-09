import express from "express";
import {createProduct, updateProduct, getProduct, getAllProducts, deleteProduct} from "../controllers/productController.js";
import {authMiddleware, isAdmin} from "../middlewares/authMiddleware.js"

const router = express.Router();

router.route("/").post(createProduct);
router.route("/:id").put(updateProduct);
router.route("/:id").get(getProduct);
router.route("/").get(getAllProducts);
router.delete("/:id",deleteProduct);

export default router;