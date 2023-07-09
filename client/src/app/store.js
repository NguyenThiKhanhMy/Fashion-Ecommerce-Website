import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import blogReducer from "../features/blogs/blogSlice"
import productReducer from "../features/products/productSlice"
// import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        blog: blogReducer,
        product: productReducer,
        // wishlist: wishlistReducer,
    }
})