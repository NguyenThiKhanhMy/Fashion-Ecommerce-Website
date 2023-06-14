import blogCategoryModel from "../models/blogCategoryModel.js";
import asyncHandler from "express-async-handler";

export const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await blogCategoryModel.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCategory = await blogCategoryModel.findByIdAndUpdate(id, req.body, {
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
    const deletedCategory = await blogCategoryModel.findByIdAndDelete(id);
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// export const deleteCategory = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   try {
//    const deletedCategory = await blogCategoryModel.findByIdAndDelete(id);
//    res.status(200).json(deletedCategory);
//   } catch (error) {
//     throw new Error(error);
//   }
//  });

export const getACategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const getACategory = await blogCategoryModel.findById(id);
    res.json(getACategory);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const getAllCategory = await blogCategoryModel.find();
    res.json(getAllCategory);
  } catch (error) {
    throw new Error(error);
  }
});