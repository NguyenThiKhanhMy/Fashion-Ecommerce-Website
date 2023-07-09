import productSizeModel from "../models/productSizeModel.js";
import asyncHandler from "express-async-handler";

export const createSize = asyncHandler(async (req, res) => {
  try {
    const newSize = await productSizeModel.create(req.body);
    res.json(newSize);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSize = await productSizeModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json(updatedSize);
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteSize = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSize = await productSizeModel.findByIdAndDelete(id);
    res.json(deletedSize);
  } catch (error) {
    throw new Error(error);
  }
});

export const getASize = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const getASize = await productSizeModel.findById(id);
    res.json(getASize);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllSize = asyncHandler(async (req, res) => {
  try {
    const getAllSize = await productSizeModel.find();
    res.json(getAllSize);
  } catch (error) {
    throw new Error(error);
  }
});