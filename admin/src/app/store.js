import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import customerReducer from "../features/customers/customerSlice";
import blogReducer from "../features/blogs/blogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    blog: blogReducer,
  },
});