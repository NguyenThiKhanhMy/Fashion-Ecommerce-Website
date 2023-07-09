import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import customerReducer from "../features/customers/customerSlice";
import blogReducer from "../features/blogs/blogSlice";
import uploadReducer from "../features/upload/uploadSlice";
import bCategoryReducer from "../features/blogCategory/blogCategorySlice";
import pCategoryReducer from "../features/productCategory/productCategorySlice";
import productReducer from "../features/products/productSlice";
import pSizeReducer from "../features/productSize/productSizeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    blogs: blogReducer,
    upload: uploadReducer,
    bCategory: bCategoryReducer,
    products: productReducer,
    pCategory: pCategoryReducer,
    pSize: pSizeReducer,
  },
});