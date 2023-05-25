import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetails";
import WishList from "./pages/WishList";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path= "About"  element= {<About />} />
            <Route path= "Blog"  element= {<Blog />} />
            <Route path= "Login"  element= {<Login />} />
            <Route path= "Signup"  element= {<Signup />} />
            <Route path= "BlogDetail"  element= {<BlogDetail />} />
            <Route path= "WishList"  element= {<WishList />} />
            <Route path= "ShoppingCart"  element= {<ShoppingCart />} />
            <Route path= "ProductDetail"  element= {<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
