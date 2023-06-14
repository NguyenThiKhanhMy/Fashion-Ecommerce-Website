import express from "express";
import { createCategory,getAllCategory,updateCategory, deleteCategory, getACategory} from"../controllers/productCategoryController.js";
const router = express.Router();

router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/:id", getACategory);
router.get("/", getAllCategory);

export default router;