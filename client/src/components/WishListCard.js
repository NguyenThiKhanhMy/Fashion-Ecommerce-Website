import React from "react";
import ProductCard from "./ProductCard";
import {FiShoppingCart} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";

const WishListCard = () => {
    return (
        <>
        <div>
          <ProductCard/>
          <div className="wishlist-card d-flex gap-2 align-items-end">
              <p className="mb-0"><a href="/" className="text-dark mt-1" >Thêm vào giỏ hàng</a></p>
              <Link to="/GioHang" className="text-dark" style={{fontSize: "18px"}}><FiShoppingCart/></Link>
            </div>
            <div className="d-flex gap-2 align-items-end">
              <p className="mb-0"><a href="/" className="text-dark mt-1" >Xóa</a></p>
              <Link to="/GioHang" className="text-dark" style={{fontSize: "18px"}}><AiOutlineClose/></Link>
            </div>
        </div>
        </>
    )}

export default WishListCard;