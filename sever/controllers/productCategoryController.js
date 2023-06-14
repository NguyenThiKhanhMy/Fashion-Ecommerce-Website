import productCategory from "../models/productCategoryModel.js";
import asyncHandler from "express-async-handler";

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await productCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await productCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await productCategory.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getACategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getACategory = await productCategory.findById(id);
    res.json(getACategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const getAllCategory = await productCategory.find();
    res.json(getAllCategory);
  } catch (error) {
    throw new Error(error);
  }
});