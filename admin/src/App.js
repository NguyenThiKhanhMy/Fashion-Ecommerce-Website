import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import AddBlogs from "./pages/AddBlogs";
import Bloglist from "./pages/BlogList";
import AddBlogCategory from "./pages/AddBlogCategory";
import AddProductCategory from "./pages/AddProductCategory";
import BlogCategoryList from "./pages/BlogCategoryList";
import ProductCategoryList from "./pages/ProductCategoryList";
import ProductList from "./pages/ProductList";
import ProductSizeList from "./pages/ProductSizeList";
import AddProductSize from "./pages/AddProductSize";
import AddProduct from "./pages/AddProducts";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="add-blog" element={<AddBlogs />} />
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="add-blog-category" element={<AddBlogCategory />} />
          <Route path="blog-category-list" element={<BlogCategoryList />} />
          <Route path="add-blog-category/:id" element={<AddBlogCategory />} />
          <Route path="blog/:id" element={<AddBlogs />} />
          <Route path="product-category-list" element={<ProductCategoryList />} />
          <Route path="add-product-category/" element={<AddProductCategory />} />
          <Route path="add-product-category/:id" element={<AddProductCategory />} />
          <Route path="product-size-list" element={<ProductSizeList />} />
          <Route path="add-product-size/" element={<AddProductSize />} />
          <Route path="add-product-size/:id" element={<AddProductSize />} />
          <Route path="add-product/" element={<AddProduct />} />
          <Route path="add-product/:id" element={<AddProduct />} />
          <Route path="product-list/" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;