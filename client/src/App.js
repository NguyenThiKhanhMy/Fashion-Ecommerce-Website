import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route index element = {<Home />} />
            <Route path= "about"  element= {<About />} />
            <Route path= "Blog"  element= {<Blog />} />
            <Route path= "Login"  element= {<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
