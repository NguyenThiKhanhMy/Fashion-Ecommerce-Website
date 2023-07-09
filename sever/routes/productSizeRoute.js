import express from "express";
import {  createSize,getAllSize,updateSize, deleteSize, getASize} from"../controllers/productSizeController.js";
const router = express.Router();

router.post("/", createSize);
router.put("/:id", updateSize);
router.delete("/:id", deleteSize);
router.get("/:id", getASize);
router.get("/", getAllSize);

export default router;